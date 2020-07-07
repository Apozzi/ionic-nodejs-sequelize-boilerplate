import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:3000/auth/login';

  constructor(private http : HttpClient) { }

  login(user : any) {
    return this.http.post(this.url, user);
  }

}
