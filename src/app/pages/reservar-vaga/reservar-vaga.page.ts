import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import * as Leaflet from 'leaflet';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-reservar-vaga',
  templateUrl: 'reservar-vaga.page.html',
  styleUrls: ['reservar-vaga.page.scss'],
})
export class ReservarVagaPage {
  map: Leaflet.Map;
  watchLocalization: any;
  mapErrorFlag = false;
  address; // TODO: pegar a localização atual do celular

  constructor(private navCtrl: NavController, private nativeGeocoder: NativeGeocoder) {}

  ionViewDidEnter() { 
    this.getEventLocalization();
  }

  getEventLocalization() {
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
  
  this.nativeGeocoder.forwardGeocode(this.address, options)
    .then((result: NativeGeocoderResult[]) => {
      this.leafletMap(result[0].latitude,  result[0].longitude);
    }).catch(
      (error: any) => {
        console.log(error);
        this.mapErrorFlag = true;
    });
  }

  getLocalization() {
    
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

    const markPoint = Leaflet.marker([latitude, longitude], { icon: icon });
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
