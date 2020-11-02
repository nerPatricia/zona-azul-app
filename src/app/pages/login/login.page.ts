import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.userData.email, this.userData.password).then(
      async (response: any) => {
        await this.authService.saveAuth(response);
        this.router.navigateByUrl('/dashboard');
      }, error => {
        Swal.fire(error, 'Usuário e/ou senha inválidos.');
        console.log(error);
      }
    );

  }

  esqueciSenha() {
    this.router.navigateByUrl('/esqueci-senha');
  }
}
