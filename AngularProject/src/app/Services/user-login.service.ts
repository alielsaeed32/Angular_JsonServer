import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private isLoggedSubject:BehaviorSubject<boolean>;
  constructor() { 
    this.isLoggedSubject = new BehaviorSubject<boolean>(false);
  }
  login(usrName:string,pwd:string):boolean
  {
    let usrToken:string = "aaaaasssssddddd";
    localStorage.setItem('usrToken',usrToken);
    this.isLoggedSubject.next(true);
    return true;
  }

  logout()
  {
    localStorage.removeItem('usrToken');
    this.isLoggedSubject.next(false);
  }

  loginStatus():boolean
  {
    if (localStorage.getItem('usrToken'))
      return true;
    return false;
  }
  loginStatusSubject() :Observable<boolean>
  {
    return this.isLoggedSubject;
  }
}
