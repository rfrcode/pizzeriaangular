import { Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RuleDirective } from 'projects/validators';

export class InputBase implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() text: string = ''
  @Input() type: string = 'text'
  isValid: boolean = true
  errorMessage: string = ''
  isDisabled: boolean
  value: any = ''
  private onChange = (_: any) => { }
  private onTouch = () => { }
  private subscription : Subscription
  constructor(private ruleDirective: RuleDirective) {
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    if (this.ruleDirective && this.ruleDirective.validateField) {
      this.errorMessage = this.ruleDirective.validateField.message
      this.subscription = this.ruleDirective.isValid.subscribe(valid => this.isValid = valid)
    }
  }
  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.value = obj
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  onChangeValue(value: any) {
    if (this.value !== value) {
      this.value = value
      this.onChange(this.value)
      this.onTouch()
    }
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled
  }
}
