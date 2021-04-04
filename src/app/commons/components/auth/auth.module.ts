import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SiderMenuComponent } from './sider-menu/sider-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LayoutMenuComponent } from './layout-menu/layout-menu.component';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    SiderMenuComponent,
    LayoutMenuComponent,
  ],
  exports: [
    HeaderMenuComponent,
    SiderMenuComponent,
    LayoutMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NzMenuModule,
    NzIconModule,
    NzLayoutModule,
  ]
})
export class AuthModule {
}
