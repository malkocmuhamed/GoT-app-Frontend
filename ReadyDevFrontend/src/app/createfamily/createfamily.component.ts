import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Family } from '../_models/family.model';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FamilyService } from '../_services/family.service';

@Component({
  selector: 'app-createfamily',
  templateUrl: './createfamily.component.html',
  styleUrls: ['./createfamily.component.css']
})
export class CreatefamilyComponent implements OnInit {

  // familyForm : FormGroup | any;
  familyModel = <Family>{};

  constructor(
    public toastr: ToastrService,
    public router: Router,
    private familyService: FamilyService
  ) { 
  }

  familyForm = new FormGroup(
    {
      familyName: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      representative: new FormControl('', [Validators.required])
    }
  );

  ngOnInit(): void {
  }

  get f() {
    return this.familyForm.controls;
  }
 
  addFamily(): void{
    this.familyService.postFamily(this.familyModel).subscribe(
      data => {
            this.toastr.success('New family has been added.');
      }
    )
    this.router.navigate(['/families']);
  }
  
}
