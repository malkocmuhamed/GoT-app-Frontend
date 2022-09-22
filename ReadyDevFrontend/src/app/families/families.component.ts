import { Component, OnInit } from '@angular/core';
import { Family } from '../_models/family.model';
import { FamilyService } from '../_services/family.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-families',
  templateUrl: './families.component.html',
  styleUrls: ['./families.component.css']
})

export class FamiliesComponent implements OnInit {

  totalRecords: string = '';
  page: Number = 1;
  families: Family[] | any;
  
  constructor(private familyService: FamilyService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFamiliesList();
  }

  
  getFamiliesList(): void {
    this.familyService.getAllFamilies().subscribe(data => {
      this.families = data;
      console.log(data);
    })
  }

  removeFamily(id: number): void {
    let familiesArray: Family[] = Array.from(this.families);
    let index = familiesArray.findIndex(element => element.id == id);
    this.familyService.deleteFamily(id);
    this.families.splice(index, 1);
  }

}
