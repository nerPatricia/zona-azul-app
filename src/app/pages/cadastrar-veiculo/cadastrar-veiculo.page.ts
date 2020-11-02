import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: 'cadastrar-veiculo.page.html',
  styleUrls: ['cadastrar-veiculo.page.scss'],
})
export class CadastrarVeiculoPage implements OnInit {
  placaData: any = {
    placa: '',
    tipoVeiculo: '',
    marca: '',
    modelo: ''
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  cadastrar() {
    this.navCtrl.navigateForward(['dashboard']);
  }

  back() {
    this.navCtrl.navigateForward(['dashboard']);
  }
}
