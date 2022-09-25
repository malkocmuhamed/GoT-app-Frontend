import { Component, OnInit, Inject } from '@angular/core';
import { Family } from '../_models/family.model';
import { FamilyService } from '../_services/family.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CreatefamilyComponent } from '../createfamily/createfamily.component';
import { DeletemodalComponent } from '../deletemodal/deletemodal.component';
import { EditfamilyComponent } from '../editfamily/editfamily.component';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.css']
})

export class FamiliesComponent {

  totalRecords: string = '';
  page: Number = 1;
  families: Family[] = [];
  name: any;
  
  constructor(private familyService: FamilyService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFamiliesList();
  }

  
  getFamiliesList(): void {
    this.familyService.getAllFamilies().subscribe(data => {
      this.families = data;
    })
  }

  deleteConfirm(id: number): void {
    let family = this.families.find(x => x.id == id);
    this.dialog.open(DeletemodalComponent, {
      width: '300px',
      data: {
        id: family?.id
      }
    });
  }

  postFamily(): void {
    // let familyData: Family[] = Array.from(this.families);
    // let family = this.families.findIndex(x => x.id == id);
    this.dialog.open(CreatefamilyComponent, {
      width: '350px',
      height: '380px'
    });
  }
  
  editFamily(): void {
    // let familyData: Family[] = Array.from(this.families);
    // let family = this.families.findIndex(x => x.id == id);
    this.dialog.open(EditfamilyComponent, {
      width: '350px',
      height: '380px'
    });
  }

  // removeFamily(id: number): void {
  //   let familiesArray: Family[] = Array.from(this.families);
  //   let index = familiesArray.findIndex(element => element.id == id);
  //   this.familyService.deleteFamily(id);
  //   this.families.splice(index, 1);
  // }

}
