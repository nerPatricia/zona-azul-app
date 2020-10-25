import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: 'app-header.html',
  styleUrls: ['app-header.scss']
})
export class AppHeaderComponent {
  @Input()
  showButtonBack: string = '';
  @Input()
  showButtonHelp: boolean = false;
  @Input()
  showButtonMenu: boolean = false;
  @Input()
  showButtonAddCredits: boolean = false;
  @Input()
  title: string;
  @Input()
  iconTitle: string = '';

  // TODO: Juntar os botões do mesmo lado em um só e usar função verificadora
  // diminuindo a qtd de flags

  @Output()
  public eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(
    public navCtrl: NavController, 
    private router: Router,
    private authService: AuthService
  ) {}

  helpModal() {
    this.navCtrl.navigateForward('/');
  }

  goToAddCredits() {

  }

  logout() {
    this.authService.deleteAuthData().then(() => {
      this.router.navigateByUrl('/');
    }, error => {
      console.log(error);
    });
  }

  // iconeLista() {
  //   if (this.showButtonList != '') {
  //     if (this.showButtonList === 'clientes') {
  //       this.eventEmitter.emit({
  //         salvar: true
  //       });
  //     } else {
  //       this.navCtrl.navigateForward(this.showButtonList);
  //     }
  //   }
  // }
}
