import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfamilyComponent } from './editfamily.component';

describe('EditfamilyComponent', () => {
  let component: EditfamilyComponent;
  let fixture: ComponentFixture<EditfamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
