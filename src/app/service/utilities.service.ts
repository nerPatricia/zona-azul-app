import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  url = environment.url;

  constructor(public http: HttpClient, private authService: AuthService) {}

  getSaldo() {
    const url = this.url + '/get-saldo';
    return this.http.get(url).toPromise();
  }

  getCarros() {
    const url = this.url + '/get-carros';
    return this.http.get(url).toPromise();
  }

  async getEventById(eventId) {
    const auth = await this.authService.getAuthData();
    const url = '/event/' + eventId;
    const headers = new HttpHeaders({ 'x-access-token': auth.token});
    return this.http.get(url, { headers }).toPromise();
  }

}
