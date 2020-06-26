import { Directive, Input, ElementRef } from '@angular/core';
import { UserService } from './user.service'
import { OnInit, OnDestroy } from '@angular/core'
import { User } from '../models/user'
import { Observable, Subscription } from 'rxjs';

const HIDDEN: string = 'hidden';

@Directive({
  selector: '[auth]'
})
export class AuthDirective implements OnInit, OnDestroy {
  private subscription: Subscription;
  @Input() auth: string
  constructor(private userService: UserService, private elementRef: ElementRef) {
    this.subscription = this.userService.userObservable.subscribe(user => this.toggleHidden(user))
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleHidden(user: User){
    if (!this.userService.checkRole(user, this.auth)) {
      this.elementRef.nativeElement.classList.add(HIDDEN);
    }
    else {
      this.elementRef.nativeElement.classList.remove(HIDDEN);
    }
  }

  async ngOnInit(): Promise<void> {
    const user = await this.userService.get();
    this.toggleHidden(user);
  }

}
