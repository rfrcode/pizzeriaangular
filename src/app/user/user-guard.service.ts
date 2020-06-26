import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) {

  }
  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const user = await this.userService.get()
    const data = route.data || {}
    const isInRole = this.userService.checkRole(user, data.role)
    if (!isInRole) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
