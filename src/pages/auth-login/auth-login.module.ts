import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthLoginPage } from './auth-login';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthLoginPage,
  ],
  imports: [
    FormsModule,
    IonicPageModule.forChild(AuthLoginPage),
  ],
})
export class AuthLoginPageModule {}
