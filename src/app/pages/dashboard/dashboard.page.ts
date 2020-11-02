import { UtilitiesService } from './../../service/utilities.service';
import Swal from 'sweetalert2';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  saldo = "0";
  carrosList = {};

  constructor(private navCtrl: NavController, private utilitiesService: UtilitiesService) {}

  ngOnInit() {
    this.utilitiesService.getCarros().then(
      (response) => {
        this.carrosList = response;
        console.log(response);
      }, error => {
        console.log(error);
      }
    );

    this.utilitiesService.getSaldo().then(
      (response: string) => {
        this.saldo = response;
      }, error => {
        console.log(error);
      }
    );
  }

  addCredits() {}

  reservarVaga() {
    this.navCtrl.navigateForward(['reservar-vaga']);
  }
}
