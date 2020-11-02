import Swal from 'sweetalert2';
import { UtilitiesService } from './../../service/utilities.service';
import { ToastService } from './../../service/toast.service';
import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservar-vaga',
  templateUrl: 'reservar-vaga.page.html',
  styleUrls: ['reservar-vaga.page.scss'],
})
export class ReservarVagaPage {
  carroData: any;
  estacionarData: any = {
    placa_carro: '',
    id_vaga: '',
    duracao: ''
  };
  saldo = 0;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
    private utilitiesService: UtilitiesService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.carroData = this.router.getCurrentNavigation().extras.state.carroData;
        this.saldo = this.router.getCurrentNavigation().extras.state.saldo;

        this.estacionarData.placa_carro = this.carroData.placa;
      }
    });
  }

  ionViewDidEnter() {}

  back() {
    this.navCtrl.navigateForward(['dashboard']);
  }

  avancar() {
    if (this.saldo < (this.estacionarData.duracao * 3)) {
      this.toast.present({ message : 'Você não possui saldo suficiente. Adicione créditos e tente novamente.' });
      return;
    } 
    if (this.estacionarData.placa_carro == '' && this.estacionarData.id_vaga == '' && this.estacionarData.duracao == '') {
      this.toast.present({ message : 'Preencha todos os campos para continuar.' });
      return;
    }

    console.log(this.estacionarData);

    this.utilitiesService.estacionar(this.estacionarData).then(
      (response: any) => {
        Swal.fire('Sucesso', 'Carro cadastrado com sucesso.', 'success').then(
          () => {
            this.navCtrl.navigateForward(['dashboard']);
          }
        );
      }, error => {
        Swal.fire('Atenção', 'Ocorreu um erro ao estacionar. Tente novamente mais tarde.', 'error');
      }
    );
  }  
}
