import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementPageComponent } from './management-page/management-page.component';
import { MultiTabModule } from '../commons/components/multi-tab/multi-tab.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@NgModule({
  declarations: [ManagementPageComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    MultiTabModule,
    NzMenuModule,
  ]
})
export class ManagementModule {
}
