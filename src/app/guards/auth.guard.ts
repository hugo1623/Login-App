import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Console } from 'console';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){
    
  }
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate():boolean{
    // console.log('Guard')
    // return this.auth.estaAutenticado();
    if(this.auth.estaAutenticado()){
      return true;
    } else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
  
}
