import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    await this.userService.add({
      id: '1',
      name: 'raul',
      email: 'aaa@a.com',
      expiresIn: 123,
      token: 'xxx',
      refreshToken: 'yyyy',
      role: 'admin'
    })
    this.router.navigate(['']);
  }

}
