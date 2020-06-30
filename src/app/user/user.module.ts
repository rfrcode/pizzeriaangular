import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthDirective } from './auth.directive';

@NgModule({
  declarations: [AuthDirective],
  imports: [
    CommonModule
  ],
  exports: [AuthDirective]
})
export class UserModule { }
