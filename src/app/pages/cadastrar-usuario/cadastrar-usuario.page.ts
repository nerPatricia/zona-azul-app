import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: 'cadastrar-usuario.page.html',
  styleUrls: ['cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage {
  constructor(private navCtrl: NavController) {}

  avancar() {
    // this.navCtrl.navigateRoot(['descricao-envolvidos']);
  }
}
