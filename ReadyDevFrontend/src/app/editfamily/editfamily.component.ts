import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Family } from '../_models/family.model';
import { Route, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FamilyService } from '../_services/family.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeletemodalComponent } from '../deletemodal/deletemodal.component';

@Component({
  selector: 'app-editfamily',
  templateUrl: './editfamily.component.html',
  styleUrls: ['./editfamily.component.css']
})
export class EditfamilyComponent implements OnInit {

  public familyForm: FormGroup | any;

  constructor(
    public toastr: ToastrService,
    public router: Router,
    public familyService: FamilyService,
    public dialogRef: MatDialogRef<DeletemodalComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Family,
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.familyForm = new FormGroup(
      {
        id: new FormControl(''),
        familyName: new FormControl('', [Validators.required]),
        logo: new FormControl('', [Validators.required]),
        representative: new FormControl('', [Validators.required])
      }
    );
    this.familyForm.patchValue(this.data);
  }

  onSubmit(): void{
    console.log(this.data.id); 
    this.familyService.editFamily(this.familyForm.value).subscribe(
      data => {
        this.data = data;
      })
    this.dialog.closeAll();
    location.reload();
    this.toastr.success('Family successfully updated!');
  }
}
