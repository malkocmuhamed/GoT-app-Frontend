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

  // registerForm: FormGroup | any;
  title = 'material-register';
  success = '';
  userModel = <User>{};

  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      confirmpassword: new FormControl('', [Validators.required]),
    },
     CustomValidator.mustMatch('password', 'confirmpassword')
    );
  
  constructor
  (
    public toastr: ToastrService, 
    private userService: UserService
    ) 
  { }

  ngOnInit(): void {
  }

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmpassword')?.touched
    );
  }

  onSubmit(): void{
    if(!this.registerForm.valid){
      return;
    }
    this.userService.postUser(this.userModel).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Your registration has been approved.', 'Congratulations!');
      })
    // this.router.navigate(['/login'])
  } 
}


