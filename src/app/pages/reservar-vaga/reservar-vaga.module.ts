import { ReservarVagaPage } from './reservar-vaga.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

const routes: Routes = [
  {
    path: '',
    component: ReservarVagaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppHeaderModule,
    RouterModule.forChild(routes)
  ],
  providers: [Geolocation, NativeGeocoder],
  declarations: [ReservarVagaPage]
})
export class ReservarVagaPageModule {}
