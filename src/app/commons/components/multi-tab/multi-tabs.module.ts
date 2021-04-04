import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTabsComponent } from './multi-tabs/multi-tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule } from '@angular/router';

export * from './multi-tabs.service';

@NgModule({
  declarations: [MultiTabsComponent],
  exports: [
    MultiTabsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzTabsModule,
  ]
})
export class MultiTabsModule {
}
