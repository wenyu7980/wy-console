import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTabsComponent } from './multi-tabs/multi-tabs.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';

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
    DragDropModule,
    NzDropDownModule,
    NzMenuModule,
  ]
})
export class MultiTabsModule {
}
