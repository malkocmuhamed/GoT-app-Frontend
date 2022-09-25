import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Family } from '../_models/family.model';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FamilyService } from '../_services/family.service';

@Component({
  selector: 'app-editfamily',
  templateUrl: './editfamily.component.html',
  styleUrls: ['./editfamily.component.css']
})
export class EditfamilyComponent implements OnInit {

  // familyForm : FormGroup | any;
  familyModel = <Family>{};

  constructor(
    public toastr: ToastrService,
    public router: Router,
    public familyService: FamilyService
    ) { }

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
 
  onSubmit(): void{
  
    this.familyService.editFamily(this.familyModel).subscribe(
      data => {
        this.toastr.success('Family successfully updated!');
      })

    this.router.navigate(['/families'])
  }

}
