import { Injectable } from '@angular/core';
import { get, set, del } from "idb-keyval";
import { User } from './user';
import { Subject } from 'rxjs';

const key: string = 'user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userObservable = new Subject<User>();

  constructor() { }

  async add(user: User): Promise<void> {
    await set(key, user)
    this.userObservable.next(user);
  }
  async get(): Promise<User> {
    return await get(key) as User;
  }
  async remove(): Promise<void> {
    await del(key);
    this.userObservable.next(undefined);
  }
  checkRole(user: User, role: string): boolean {
    if (user && user.role === role) {
      return true;
    }
    return false;
  }
}
