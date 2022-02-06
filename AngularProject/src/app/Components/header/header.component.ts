import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginService } from 'src/app/Services/user-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
