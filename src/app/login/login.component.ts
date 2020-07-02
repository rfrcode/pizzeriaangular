import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidatorService } from '../../app/validators/validator.service';
import { ValidatorField } from '../models/validator';
import { UserService } from '../user/user.service';
import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    {
      provide: ValidatorService, useFactory: (validatorFields: ValidatorField[]) => {
        return new ValidatorService(validatorFields)
      },
      deps: ['LOGINVALIDATOR']
    }
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  private subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private loginService: LoginserviceService,
    private userService: UserService
  ) {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  submit(): void {
    this.subscription = this.loginService.login(this.form.value).subscribe(
      async user => await this.userService.add(user),
      error => console.log(error) // TODO
    )
  }
}
