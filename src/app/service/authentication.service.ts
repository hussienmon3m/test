import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser:any = null;

  constructor() { }

  authenticate(userInfo:any){
    // check user name
    // if correct get user
    // store value
    const users = [
      {name: 'user', password:'user'},
      {name: 'admin', password: 'admin'}
    ];
    let user = users.find(user => user.name== userInfo.name && user.password == userInfo.password);
    if(user) this.currentUser = user;
    return user;
  }
}
