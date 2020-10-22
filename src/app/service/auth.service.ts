import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private storage: Storage) { }

  async saveAuth(authData) {
    await this.storage.set('authData', authData);
  }

  async getAuthData() {
    return await this.storage.get('authData');
  }

  async deleteAuthData() {
    await this.storage.remove('authData');
  }

}
