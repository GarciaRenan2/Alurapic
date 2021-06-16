import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { SignupService } from './signup/signup.service';
import { SignUpComponent } from './signup/signup.component';
import { SignInComponent } from './signin/signin.component';
import { VMessageModule } from './../shared/components/vmessage/vmodule.module';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [SignupService]
})
export class HomeModule {}
