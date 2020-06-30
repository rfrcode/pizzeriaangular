import { Directive, Input, OnInit } from '@angular/core';
import { ValidatorService } from './validator.service'

@Directive({
  selector: '[rule]'
})
export class RuleDirective implements OnInit {
  @Input() rule: string

  constructor(private validatorService: ValidatorService) {
    /* console.log(this.validatorService); */
    
   }
  ngOnInit(): void {
    console.log(this.rule);
    }

}
