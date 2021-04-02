import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginRoutingModule} from './login-routing.module';
import {NzButtonModule} from 'ng-zorro-antd/button';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    LoginRoutingModule,
    NzButtonModule,
  ]
})
export class LoginModule {
}
