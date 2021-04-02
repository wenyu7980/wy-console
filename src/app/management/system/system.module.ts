import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { RoleListPageComponent } from './role/role-list-page/role-list-page.component';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';


@NgModule({
  declarations: [RoleListPageComponent, UserListPageComponent],
  imports: [
    CommonModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
