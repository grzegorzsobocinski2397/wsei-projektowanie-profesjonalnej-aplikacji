import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './components/auth/auth.service';

@NgModule({
  declarations: [AuthComponent],
  exports: [AuthComponent],
  imports: [FormsModule, HttpClientModule, CommonModule, BrowserModule],
  providers: [AuthService],
})
export class LoginModule {}
