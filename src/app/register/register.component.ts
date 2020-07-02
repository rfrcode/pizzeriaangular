import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidatorFactory, ValidatorService } from '../../app/validators/validator.service';
import { UserService } from '../user/user.service';
import { RegisterService } from './register.service';

const REGISTERVALIDATOR = [{
  fields: ["email"],
  message: "email es requerido",
  validators: [{ sanitizer: false, validator: () => true, args: [1, 50] }]
}]

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    { provide: ValidatorService, useFactory: ValidatorFactory(REGISTERVALIDATOR) }
  ]
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup
  private subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private userService: UserService
    ) {
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  submit(): void {
    this.subscription = this.registerService.register(this.form.value).subscribe(
      async user => await this.userService.add(user),
      error => console.log(error) // TODO
    )
  }
}
