import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { LoginserviceService } from './loginservice.service'
import { UserService } from '../user/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup
  private subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private loginService: LoginserviceService,
    private userService: UserService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.required],
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
