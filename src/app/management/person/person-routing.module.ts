import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  { path: '', component: SettingPageComponent, },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
