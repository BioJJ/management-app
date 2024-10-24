import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CreateAccountComponent } from './component/create-account/create-account.component';
import { LoginHeroComponent } from './component/login-hero/login-hero.component';
import { LoginContentComponent } from './component/login-content/login-content.component';
@NgModule({
  declarations: [
    LoginComponent,
    LoginHeroComponent,
    LoginContentComponent,
    CreateAccountComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule, MatFormFieldModule],
})
export class AuthModule {}
