import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RuleDirective } from './rule.directive';

@NgModule({
  declarations: [RuleDirective],
  imports: [
    CommonModule
  ],
  exports: [RuleDirective]
})
export class ValidatorsModule { }
