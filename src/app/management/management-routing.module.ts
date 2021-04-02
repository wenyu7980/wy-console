import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementPageComponent } from './management-page/management-page.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementPageComponent,
    children: [
      { path: 'system', loadChildren: () => import('./system/system.module').then(m => m.SystemModule) },
      { path: '**', redirectTo: 'system' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule {
}
