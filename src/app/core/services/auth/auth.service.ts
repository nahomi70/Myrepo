import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  
  private http = inject(HttpClient);

  private url = 'https://ton-api.com/api/auth/login';

  login(username:string, password:string): Observable<{token: string}> {

    const headers= new HttpHeaders({'content-Type':'application/json'});

    return this.http.post<{token: string}>(this.url,{username,password},{headers}).pipe(

      tap(response =>{

        localStorage.setItem('authtoken', response.token);
      })
    )
  }

  logout(){

    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean{

    return!!localStorage.getItem('authToken');
  }

}
