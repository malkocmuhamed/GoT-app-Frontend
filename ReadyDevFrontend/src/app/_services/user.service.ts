import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from "../_models/user.model";
import { environment } from '../../environments/environment';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { AuthenticatedResponse } from "../_models/authenticatedresponse.model";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    loginForm: FormGroup | any;
    invalidLogin: boolean | any;
    
    usersUrl = environment.baseUrl + '/api/user';
    authUrl = environment.baseUrl + '/api/user/login';
    registerUserUrl = environment.baseUrl + '/api/user/register';
   
    constructor(private router: Router, 
        private _http: HttpClient,
        public toastr: ToastrService) 
        { 
            this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
            });
         }

    
    
    postUser(user: User) {
        return this._http.post<any>(this.registerUserUrl, user);
    }

    getUserById(id: number): Observable<User> {
        return this._http.get<User>(this.usersUrl + '/' + id);
    }

    login() {
        if (this.loginForm.valid) {
          this._http.post<AuthenticatedResponse>(this.authUrl, this.loginForm.value, {
            headers: new HttpHeaders({ "Content-Type": "application/json"})
          })
          .subscribe({
            next: (response: AuthenticatedResponse) => {
              const token = response.token;
              localStorage.setItem("jwt", token); 
              this.invalidLogin = false; 
              this.router.navigate(["/dashboard"]);
              this.toastr.success('User authenticated successfully.');
            },
            error: (err: HttpErrorResponse) => this.invalidLogin = false
          })
        }
      }
     
      logout(){
        localStorage.removeItem("jwt");
        this.router.navigate(['/login']);
        this.toastr.info("Login session has expired.");
      }
    
}