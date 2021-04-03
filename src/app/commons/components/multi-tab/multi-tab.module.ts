import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTabComponent } from './multi-tab/multi-tab.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule } from '@angular/router';

export * from './multi-tab.service';

@NgModule({
  declarations: [MultiTabComponent],
  exports: [
    MultiTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzTabsModule,
  ]
})
export class MultiTabModule {
}
