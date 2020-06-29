import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user/user.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup
  private subscription: Subscription

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: [''],
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  submit(): void {
    this.subscription = this.registerService.register(this.form.value).subscribe(
        async user => await this.userService.add(user),
        error => console.log(error) // TODO
      )
  }
}
