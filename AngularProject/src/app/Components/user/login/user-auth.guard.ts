import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {

  constructor(private usrLoginService:UserLoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    {
      let isLogged = this.usrLoginService.loginStatus();
      if (isLogged)
      {
        return true;
      }
      else
      {
        alert("Please Login Fisrt");
        this.router.navigate(['/User/login']);
        return false;
      }
    }
  }
  
}
