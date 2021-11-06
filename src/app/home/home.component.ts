import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../service/login-service.service';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serviceShow: Boolean;
  loginForm: FormGroup;
  loginUserName: string;
  inputSugesstion: Boolean = false;
  logbtn: boolean;
  isSubmitted: boolean = false
  constructor(
    private loginService: LoginServiceService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { 
    this.loginService.showLogin.subscribe(show => {
      this.serviceShow = show
    })
    this.loginService.showLogout.subscribe(hide => {
      this.serviceShow = hide
    })
    this.loginService.loginUserName.subscribe(user => {
      this.loginUserName = user
    })
    this.loginService.logoutBtn.subscribe(logout => {
      this.logbtn = logout
    })
  }

  usersDB = [
    {
      "userid": "abc@media.com",
      "password": "abc123",
      "username": "tom"
    },
    {
      "userid": "def@media.com",
      "password": "def123",
      "username": "dick"
    }
  ]
  card = [
    {
      "img": "../../assets/img/2.png",
      "title": "Expedite Sales",
      "content": "Learning about your clients, managing your sales pipeline, automated triggers, and data driven decisions are easier than ever with our insurance CRM platform."
    },
    {
      "img": "../../assets/img/3.png",
      "title": "Automated Engagement",
      "content": "Automate follow ups, create custom email campaigns, send text messages, and target the right contact when it matters the most."
    },
    {
      "img": "../../assets/img/4.png",
      "title": "Deeper Data Analysis",
      "content": "View and understand the story your data is telling. Use that knowledge to grow your business, cross-sell, and retain your customers. Unlock the hidden potential in your data."
    },
    {
      "img": "../../assets/img/5.png",
      "title": "Client Connect",
      "content": "Let your clients update their profile and review documents at their convenience."
    }
  ]
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // "userName" : [""],
      "password": ["", Validators.required],
      "selval": ["", Validators.required],
    })
  }
  submit() {
    if (this.loginForm.valid) {
      var filterValue = this.usersDB.filter(el => el.userid == this.loginForm.controls['selval'].value && el.password == this.loginForm.controls['password'].value)
      if (filterValue.length == 1) {
        this.loginService.loginUserName.next(filterValue[0].username)
        localStorage.setItem('UserName',filterValue[0].username)
        this.toastr.success("User Name " + filterValue[0].username.toUpperCase() + " Login Succesfully")
        this.logbtn = true
        this.loginService.logoutBtn.next(this.logbtn)
        this.serviceShow = false
        this.loginForm.reset()

      }
      else {
        this.toastr.error('Incorrect UserId')
      }
      console.log('valid')
    }
    else{
      this.isSubmitted = true
      console.log('Invalid')

    }
  }
  suggestion(value) {
    if (value == "@") {
      this.inputSugesstion = true
      value = ""
    }
    else {
      this.inputSugesstion = false
    }
  }
}
