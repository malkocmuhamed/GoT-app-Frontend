import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Family } from '../_models/family.model';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FamilyService } from '../_services/family.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-createfamily',
  templateUrl: './createfamily.component.html',
  styleUrls: ['./createfamily.component.css']
})
export class CreatefamilyComponent implements OnInit {

  familyForm = new FormGroup(
    {
      familyName: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      representative: new FormControl('', [Validators.required]),
    },
  );

  constructor(
    public toastr: ToastrService,
    public router: Router,
    private familyService: FamilyService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addFamily(): void{
    if(!this.familyForm.valid){
      return;
    }
    this.familyService.postFamily(this.familyForm.value).subscribe(
      data => {
        console.log(data);
      }
    )
    this.dialog.closeAll();
    location.reload();
    this.router.navigate(['/families']);
    this.toastr.success('New family has been added.', "SUCCESS");
  }
  
}
