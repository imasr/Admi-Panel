import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiUrl } from '../../services/api.url.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ConfirmBoxService } from '../modals/confirm-box/confirm-box.service';
import { Router } from '@angular/router';
import { ApiAuthService } from '../../services/api.auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['first', 'userRole', 'email', 'createdAt', 'status', 'actions'];
  adminList: any[] = []
  dataSource = new MatTableDataSource(this.adminList);

  pageNo: number = 1;
  loader: boolean;
  searchValue: string;

  constructor(
    private apiAuth: ApiAuthService,
    private router: Router,
    private cnfboxService: ConfirmBoxService
  ) { }

  ngOnInit() {
    this.getUsers(this.pageNo);
  }

  getUsers(pageNo) {
    this.loader = true;
    this.apiAuth.authGet(`${ApiUrl.manageAdmin}/?page=${pageNo}`).subscribe(res => {
      this.loader = false;
      this.adminList = res.allAdmins;
      this.dataSource = new MatTableDataSource(this.adminList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.loader = false;
      console.log(err);
      throw err
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filteredData)
  }

  onView(id) {
    console.log("onView", id);
  }

  onUpdate(id) {
    this.router.navigate(['admin/addusers', id])
  }

  onDelete(id) {
    this.cnfboxService.openDialog()
      .subscribe(confirm => {
        if (confirm === 'yes') {
          this.apiAuth.authDelete(ApiUrl.manageAdmin, id)
            .subscribe(res => {
              console.log(res);
            }, err => {
              // console.error(err);
              throw err
            })
        }
      })
  }

}
