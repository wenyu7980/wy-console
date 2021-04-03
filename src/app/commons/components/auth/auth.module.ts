import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { SiderMenuComponent } from './sider-menu/sider-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    SiderMenuComponent,
  ],
  exports: [
    HeaderMenuComponent,
    SiderMenuComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    NzMenuModule,
    NzIconModule,
  ]
})
export class AuthModule {
}
