import { UtilitiesService } from './../../service/utilities.service';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage  {
  saldo = "0";
  carrosList = [];

  constructor(private navCtrl: NavController, private utilitiesService: UtilitiesService) {}

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

  addCredits() {}

  reservarVaga() {
    this.navCtrl.navigateForward(['reservar-vaga']);
  }

  cadastrarVeiculo() {
    this.navCtrl.navigateForward(['cadastrar-veiculo']);
  }
}
