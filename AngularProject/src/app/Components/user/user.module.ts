import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginComponent } from './login/login.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { UserAuthGuard } from './login/user-auth.guard';

const routes:Routes=[
  { path:'myProfile' , component :ViewProfileComponent , canActivate:[UserAuthGuard]  },
  { path :'editProfile' , component : EditProfileComponent , canActivate:[UserAuthGuard] },
  {path:'login' , component: LoginComponent},
  {path:'logout' , component : LogoutComponent}
];

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
