import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reservar-vaga',
  templateUrl: 'reservar-vaga.page.html',
  styleUrls: ['reservar-vaga.page.scss'],
})
export class ReservarVagaPage {
  constructor(private navCtrl: NavController) {}

  avancar() {
    // this.navCtrl.navigateRoot(['depoimentos']);
  }
}
