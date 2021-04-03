import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { SettingPageComponent } from './setting-page/setting-page.component';


@NgModule({
  declarations: [SettingPageComponent],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
