import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleListPageComponent } from './role/role-list-page/role-list-page.component';
import { UserListPageComponent } from './user/user-list-page/user-list-page.component';

const routes: Routes = [
  { path: 'roles', component: RoleListPageComponent },
  { path: 'users', component: UserListPageComponent },
  { path: '**', redirectTo: 'roles' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
