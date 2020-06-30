import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from '../user/user.service';
import { RegisterService } from './register.service';
import { ValidatorService, ValidatorFactory } from '../../app/validators/validator.service'


const REGISTERVALIDATOR = { attribute: 'email', fnValidator: () => { } }

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
      name: ['', Validators.required],
      email: ['', Validators.required],
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
