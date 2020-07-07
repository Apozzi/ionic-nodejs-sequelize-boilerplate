import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public user = {};

  ngOnInit() {
  }

  loggon() {
    this.authService.login(this.user).subscribe(async (result : any) => {
      sessionStorage.setItem("access_token", result.token);
      this.router.navigate(['Home']);
    });
  }

}
