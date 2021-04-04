import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';
import { RoleDetailPageComponent } from './role/role-detail-page/role-detail-page.component';
import { RoleListPageComponent } from './role/role-list-page/role-list-page.component';
import { DepartmentListPageComponent } from './department/department-list-page/department-list-page.component';

const routes: Routes = [
  { path: 'roles/:id', component: RoleDetailPageComponent },
  { path: 'roles', component: RoleListPageComponent },
  { path: 'users', component: UserListPageComponent },
  { path: 'departments', component: DepartmentListPageComponent },
  { path: '**', redirectTo: 'roles' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
