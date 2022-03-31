import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelsComponent } from '../models/models.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // crear nuevos usuarios
  private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
  private apikey = 'AIzaSyAYHyI6HPxoRFIASQYc-ZaKEhy4wEKRGFE';

  userToken: string;

// Login
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
   }

  logout(){
    
  }

  login(usuario: ModelsComponent){
    const authData ={
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post( 
      `${ this.url }:signInWithPassword?key=${this.apikey}`,
       authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  nuevoUsuario( usuario: ModelsComponent){
    const authData ={
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post( 
      `${ this.url }:signUp?key=${this.apikey}`,
       authData
    ).pipe(
      map( resp =>{
        this.guardarToken(resp['idToken']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

  }
  leerToken(){
    if(localStorage.getItem('token')){
      this.userToken= localStorage.getItem('token');
    }else{
      this.userToken='';
    }
    return this.userToken;
  }
}
