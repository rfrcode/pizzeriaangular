import { Directive, Input, OnInit, forwardRef } from '@angular/core';
import { ValidatorService } from './validator.service';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'
import { Validators as _Validators, Validator as _Validator } from '../models/validator'


const validateFn = (value: boolean | object, validators: _Validators[]) => {
  let result : boolean | object = true;
  // normalizeEmail es sanitizer, devuelve si le paso "p" devuelve p
  // isEmail es validador, se le pasa p y devuelve false pq no es email correcto
  // en el caso de tener la siguiente expresión: normalizeEmail().isEmail().isLength(1,50)
  // tal y como está el código si el email es false no se ejecuta isLength.
  for (const v of validators) {
    let args = [value, ...v.args]
    result = v.validator(...args)
    if (!v.sanitizer && !result) {
      return result;
    }
    if (v.sanitizer) {
      value = result;
    }
  }
  return result;
}

@Directive({
  selector: '[rule]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RuleDirective),
    multi: true
  }]
})
export class RuleDirective implements OnInit, Validator {
  @Input() rule: string
  private validateField: _Validator = null;
  constructor(private validatorService: ValidatorService) {
    /* console.log(this.validatorService); */
  }
  validate(control: AbstractControl): ValidationErrors {
    if (!this.validateField) {
      return null
    }
    const result = validateFn(control.value, this.validateField.validators)
    if (result) {
      return null
    }
    return { custom: true };
  }
  /* registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  } */
  ngOnInit(): void {
    this.validateField = this.validatorService.validators.find(
      f => f.fields.includes(name));
    console.log(this.rule);
  }
}
