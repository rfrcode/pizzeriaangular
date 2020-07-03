import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RuleDirective } from '../../validators/rule.directive';
import { InputBase } from '../input.base';

@Component({
  selector: 'bcn-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends InputBase {
  constructor(ruleDirective: RuleDirective) {
    super(ruleDirective)
  }
  onInput(value: string) {
    super.onChangeValue(value)
  }
}
