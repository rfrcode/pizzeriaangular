import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Register } from '../models/Register'
import { User } from '../models/user'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(data: Register) : Observable<User> {
    const url = `${environment.urlApi}/register`
    return this.httpClient.post<User>(url, data)
  }
}
