import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { SettingPageComponent } from './setting-page/setting-page.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';


@NgModule({
  declarations: [SettingPageComponent],
  imports: [
    CommonModule,
    PersonRoutingModule,
    NzTabsModule
  ]
})
export class PersonModule {
}
