import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { DataService } from '../services/data.service';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {

  constructor( private data: DataService,
                private router: Router) {}


  canActivate():  boolean {

    if(this.data.isData()) {
    console.log('Welcome');
    
      return true;
      
    } else {
      console.log('¡Denied!');
      this.router.navigateByUrl('/login');
      
      return false;
    }
    
    
    
  }
  
}
