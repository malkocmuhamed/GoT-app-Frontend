import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatefamilyComponent } from './createfamily.component';

describe('CreatefamilyComponent', () => {
  let component: CreatefamilyComponent;
  let fixture: ComponentFixture<CreatefamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatefamilyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatefamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
