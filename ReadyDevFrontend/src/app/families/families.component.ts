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
    this.familyService.getFamiliesByUser().subscribe(data => {
      this.families = data;
    })
  }

  deleteConfirm(id: number): void {
    let family = this.families.find(x => x.id == id);
    this.dialog.open(DeletemodalComponent, {
      width: '300px',
      data: {
        id: family?.id,
        familyName: family?.familyName
      }
    });
  }

  postFamily(): void {
    this.dialog.open(CreatefamilyComponent, {
      width: '350px',
      height: '380px'
    });
  }
  
  editFamily(): void {
    this.dialog.open(EditfamilyComponent, {
      width: '350px',
      height: '380px'
    });
  }
}
