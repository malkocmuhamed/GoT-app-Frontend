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

  title = 'material-register';
  success = '';

  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmpassword: new FormControl('', [Validators.required]),
    },
     CustomValidator.mustMatch('password', 'confirmpassword')
    );
  
  constructor
  (
    public toastr: ToastrService, 
    private router: Router,
    private userService: UserService
    ) 
  { }

  ngOnInit(): void {
    console.log(this.registerForm.valid)
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
    this.userService.postUser(this.registerForm.value).subscribe(
      data => {
        console.log(data);
        this.toastr.success('Your registration has been approved. Sign in to continue.', 'Congratulations!');
      })
    this.router.navigate(['/login'])
  } 
}


