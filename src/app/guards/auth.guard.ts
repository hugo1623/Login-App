import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot} from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  canActivate():boolean{
    return true;
  }
  
}
