import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LoginServiceService {
  showLogin = new Subject<any>()
  showLogout = new Subject<any>()
  loginUserName = new BehaviorSubject<any>(localStorage.getItem("UserName"))
  logoutBtn = new Subject<any>();
  constructor() { 
  }
}