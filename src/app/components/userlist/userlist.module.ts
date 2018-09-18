import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';

const routes: Routes = [
    {
        path: '',
        component: UserlistComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        LoaderModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UserlistComponent]
})
export class UserlistModule { }
