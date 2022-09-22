import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from '../providers/CustomValidator';
import { User } from '../_models/user.model';
import { UserService } from '../_services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  registerForm: FormGroup | any;
  title = 'material-register';
  success = '';
  userModel = <User>{};

  constructor
  (
    public toastr: ToastrService, 
    private router: Router,
    private userService: UserService
  ) 
  {
    this.registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      confirmpassword: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),

    },);
      CustomValidator.mustMatch('password', 'confirmpassword')
   }

 
  get f() {
    return this.registerForm.controls;
  }
  
  ngOnInit(): void {
  }

  onSubmit(): void{
    if(!this.registerForm.valid){
      return;
    }
    this.userService.postUser(this.userModel).subscribe(
      data => {
        this.toastr.success('Your registration has been approved', 'Congratulations!');
      })

    localStorage.setItem('user',this.registerForm.value)
    this.success = JSON.stringify(this.registerForm.value);
    this.router.navigate(['/login'])
  }
  
}
