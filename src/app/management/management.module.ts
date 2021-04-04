import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementPageComponent } from './management-page/management-page.component';
import { MultiTabsModule } from '@common-components/multi-tab';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { AuthModule } from '@common-components/auth';


@NgModule({
  declarations: [ManagementPageComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    AuthModule,
    MultiTabsModule,
    NzLayoutModule,
    NzMenuModule,
    NzCollapseModule,
  ]
})
export class ManagementModule {
}
