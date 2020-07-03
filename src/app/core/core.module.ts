import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [InputComponent],
  imports: [
    CommonModule
  ],
  exports: [InputComponent]
})
export class CoreModule { }
