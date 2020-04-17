import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Do not name both in english and french
  // Preferably name in english. (even french companies code in english, it's better for you in the long run.) 

  // Leave authentication for now should be last step.
  private users =
   [{username :'admin@admin.com',password :'12345678',roles :['ADMIN','USER']},
  {username :'user1@user.com',password :'12345678',roles :['Vendeur']},
  {username :'user2@user.com',password :'12345678',roles :['USER']}
];
public isAuth :boolean;
public userAuthen  ;
public token:string;
  

  constructor() { }
  login(username:string,password:string){
    let user;
    this.users.forEach(u=>{
      if(u.username===username && u.password===password){
        user=u;
      }
    })
    if(user){
      this.isAuth=true;
      this.userAuthen=user;
      localStorage.setItem("authenticatedUser",JSON.stringify(this.userAuthen));
    }
    else{
      this.isAuth=false;
    }
  }

  loadUser(){
    let user=localStorage.getItem('authenticatedUser');
    if(user){
      this.userAuthen=JSON.parse(user);
      this.isAuth=true;
    }
  }

 

  isAuthenticated(){
    return this.isAuth;
  }
  logout(){
    this.isAuth=false;
    this.userAuthen=undefined;
    localStorage.removeItem('authenticatedUser');
  }
  
  isAdmin(){
    if(this.userAuthen){
      return this.userAuthen.roles.indexOf("ADMIN")>-1;
    }
    else return false;
  }
  isVendeur(){
    if(this.userAuthen){
      return this.userAuthen.roles.indexOf("Vendeur")>-1;
    }
    else return false;
  }

}