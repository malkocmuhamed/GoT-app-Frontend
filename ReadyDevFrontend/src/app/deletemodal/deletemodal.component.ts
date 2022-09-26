import { Component, OnInit, Inject  } from '@angular/core';
import { Family } from '../_models/family.model';
import { FamilyService } from '../_services/family.service';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FamiliesComponent } from '../families/families.component';
import { NgModel } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deletemodal',
  templateUrl: './deletemodal.component.html',
  styleUrls: ['./deletemodal.component.css']
})
export class DeletemodalComponent implements OnInit {

  families: Family[];

  constructor(
    public dialogRef: MatDialogRef<DeletemodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Family,
    public familyService: FamilyService,
    public toastr: ToastrService) 
    { 
      this.families = [];
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
}
  removeFamily(id: number): void {
    let familyArray : Family[] = Array.from(this.families);
    let index = familyArray.findIndex(element => element.id == id);
    this.familyService.deleteFamily(id);
    this.families.splice(index, 1);
    this.dialogRef.close();
    location.reload();

  }
}
