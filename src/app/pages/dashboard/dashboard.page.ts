import { UtilitiesService } from './../../service/utilities.service';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage  {
  saldo = "0";
  carrosList = [];

  constructor(
    private navCtrl: NavController, 
    private utilitiesService: UtilitiesService,
    private router: Router
  ) {}

  ionViewDidEnter() {
    this.utilitiesService.getCarros().then(
      (response: any) => {
        this.carrosList = response.carros;
        console.log(response);
      }, error => {
        console.log(error);
      }
    );

    this.utilitiesService.getSaldo().then(
      (response: any) => {
        this.saldo = response.saldo;
      }, error => {
        console.log(error);
      }
    );
  }

  addCredits() {
    this.navCtrl.navigateForward(['adicionar-creditos']);
  }

  reservarVaga(carro) {
    const navigationExtras: NavigationExtras = {
      state: { 
        carroData: carro,
        saldo: this.saldo
       }
    };
    this.router.navigate(['reservar-vaga'], navigationExtras);
  }

  cadastrarVeiculo() {
    this.navCtrl.navigateForward(['cadastrar-veiculo']);
  }
}
