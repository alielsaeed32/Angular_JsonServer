import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isUsrLogin:boolean=false;
  constructor(private usrLoginService:UserLoginService) { }

  ngOnInit(): void {
    this.usrLoginService.loginStatusSubject().subscribe({
      next: (logStatus) => { this.isUsrLogin = logStatus }
    });
  }

}
