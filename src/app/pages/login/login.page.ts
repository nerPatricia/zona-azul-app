import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  userData: any = {
    email: '',
    password: ''
  };
  showPassword: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    this.router.navigateByUrl('/dashboard');
  }

  esqueciSenha() {
    this.router.navigateByUrl('/esqueci-senha');
  }
}
