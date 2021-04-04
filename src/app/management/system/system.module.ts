import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { RoleListPageComponent } from './role/role-list-page/role-list-page.component';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';
import { RoleDetailPageComponent } from './role/role-detail-page/role-detail-page.component';
import { DepartmentListPageComponent } from './department/department-list-page/department-list-page.component';


@NgModule({
  declarations: [RoleListPageComponent, UserListPageComponent, RoleDetailPageComponent, DepartmentListPageComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
