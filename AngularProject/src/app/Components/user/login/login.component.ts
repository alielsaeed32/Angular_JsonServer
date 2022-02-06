import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged:boolean = false;
  constructor(private usrLoginService:UserLoginService) { 
    
  }

  ngOnInit(): void {
    this.isLogged = this.usrLoginService.loginStatus();
  }
  login()
  {
    this.usrLoginService.login("tamara","12344321");
    this.isLogged = this.usrLoginService.loginStatus();
  }
  logout()
  {
    this.usrLoginService.logout();
    this.isLogged = this.usrLoginService.loginStatus();
  }
  

}
