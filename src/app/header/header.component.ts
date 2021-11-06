import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  serviceShow : boolean
  showBoolean : boolean;
  loginUser : any ;
  logbtn : boolean = false
  constructor(
    private loginService : LoginServiceService,
    private router : Router
    ) { 
    this.loginService.showLogin.subscribe(show =>{
        this.serviceShow = show
    })
    this.loginService.showLogout.subscribe(hide =>{
      this.serviceShow = hide
    })
    this.loginService.loginUserName.subscribe(user =>{
      if(user != undefined){
        this.showBoolean = true
        this.logbtn = true
      }
      this.loginUser = user
    })
    this.loginService.logoutBtn.subscribe(logout =>{
      this.logbtn = logout
    })
  }
  ngOnInit(): void {
  }
  login(){

    this.showBoolean = true

    this.loginService.showLogin.next(this.showBoolean)

  }

  logout(){
    this.showBoolean = false
    this.loginService.showLogout.next(this.showBoolean)
    this.router.navigate(['']);
    this.loginUser = false;
    this.logbtn = false
  }  
}
