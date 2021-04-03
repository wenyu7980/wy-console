import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingPageComponent } from './setting-page/setting-page.component';

const routes: Routes = [
  { path: 'setting', component: SettingPageComponent, },
  { path: '**', redirectTo: 'setting', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
