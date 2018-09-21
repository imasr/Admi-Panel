import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { FilterPipe } from '../../pipes/filter.pipe';

const routes: Routes = [
    {
        path: '',
        component: UserlistComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    declarations: [UserlistComponent, FilterPipe]
})
export class UserlistModule { }
