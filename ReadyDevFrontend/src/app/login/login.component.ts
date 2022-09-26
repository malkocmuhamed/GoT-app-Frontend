import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticatedResponse } from '../_models/authenticatedresponse.model';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'material-login';
  invalidLogin: boolean | any;
  credentials: User = {name:'', username:'', password:''};
  loginForm = this.userService.loginForm;

  constructor(
    private router:Router, private toastr: ToastrService, private userService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  login(){
    this.userService.login();
  }

}