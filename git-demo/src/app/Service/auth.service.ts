import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiurl='https://localhost:44373/api/Authenticate/login'
// email:any;
// password:any;
//   constructor(private http: HttpClient ,private router:Router) { }
//    setToken(token: string){
//     localStorage.setItem('token', token);
//   }
//  getToken():string|null {
//     return localStorage.getItem('token');
//   }

//  isLoggedIn(){
//     return this.getToken()!=null;

//   }

  // logout(){
  //   localStorage.removeItem('token');
  //   this.router.navigate(['login']);
  // }

//   login({email,password}:any):Observable<any>{
//     if(email=='admin@gmail.com' && password=='admin'){
//       this.setToken('asdfghjklqwertyuiop');
//       return of({email:'admin@gmail.com'})
//     }
//     return throwError(new Error('failed to login'));
//   }
constructor(private http: HttpClient ,private router:Router) { }

proceedLogin(usercred:User):Observable<User>{
return this.http.post<User>(this.apiurl,usercred)
}

 }

