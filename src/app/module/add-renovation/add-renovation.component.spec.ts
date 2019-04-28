import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRenovationComponent } from './add-renovation.component';

describe('AddRenovationComponent', () => {
  let component: AddRenovationComponent;
  let fixture: ComponentFixture<AddRenovationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRenovationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRenovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
