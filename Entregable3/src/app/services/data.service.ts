import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  login( user: UserModel) {
    
    
    if (user.name === 'Alex' && user.email === 'alexandrumarianghidigeanu@yahoo.es' && user.password === '1234') {
      localStorage.setItem('data', 'true');
      //console.log('chiky',localStorage);
      
      return true;
    } else {
      return false;
    }
  }
  isData(): boolean {
    if ( localStorage.getItem('data') === 'true') {
      return true;
    } else {
      return false;
    }
  }
}
