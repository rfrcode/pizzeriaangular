import { Directive, Input, OnInit, forwardRef } from '@angular/core';
import { ValidatorService } from './validator.service';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms'
import { ValidatorField, Validator as _Validator } from './validator'
import { Subject } from 'rxjs';


const validateFn = (value: boolean | any, validators: _Validator[]) => {
  let result: boolean | any = true;
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
  validateField: ValidatorField = null;
  isValid = new Subject<boolean>();
  constructor(private validatorService: ValidatorService) {
    // Nos podríamos inyectar el input component pero es una 
    // mala práctica porque si hago 4 wrapper no hay forma de 
    // saber cual es.
  }
  validate(control: AbstractControl): ValidationErrors {
    // TODO Cambiar la propiedad isValid y errorMessage del 
    // componente padre
    this.isValid.next(true)
    if (!this.validateField) {
      return null
    }
    const result = validateFn(control.value, this.validateField.validators)
    if (result) {
      return null
    }
    this.isValid.next(false)
    return { custom: true };
  }
  ngOnInit(): void {
    this.validateField = this.validatorService.validatorFields.find(
      f => f.fields.includes(this.rule));
  }
}
