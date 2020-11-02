import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-reservar-vaga',
  templateUrl: 'reservar-vaga.page.html',
  styleUrls: ['reservar-vaga.page.scss'],
})
export class ReservarVagaPage {
  map: Leaflet.Map;
  watchLocalization: any;
  mapErrorFlag = false;
  address = {
    latitude: 0,
    longitude: 0
  };

  constructor(
    private navCtrl: NavController, 
    private nativeGeocoder: NativeGeocoder,
    private geolocation: Geolocation
  ) {}

  ionViewDidEnter() { 
    this.geolocation.getCurrentPosition().then((resp) => {
      this.address.latitude = resp.coords.latitude;
      this.address.longitude = resp.coords.longitude;

      this.generateMap();
     }).catch((error) => {
       console.log('Error getting location', error);
       this.mapErrorFlag = true;
     });
  }

  generateMap() {
    this.leafletMap(this.address.latitude, this.address.longitude);
  }

  leafletMap(latitude, longitude) {
    let icon = Leaflet.icon({
      iconUrl: '../../assets/icon/favicon.png', // TODO: alterar esse icone 
    
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    this.map = Leaflet.map('mapId').setView([latitude, longitude], 13);
    Leaflet.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'nome_app © LeafLet',
    }).addTo(this.map);

    const markPoint = Leaflet.marker([latitude, longitude], {icon: icon});
    markPoint.bindPopup('<p>placa_carro</p>');
    this.map.addLayer(markPoint);
  }

  ngOnDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }

  avancar() {
    // this.navCtrl.navigateRoot(['depoimentos']);
  }
}
