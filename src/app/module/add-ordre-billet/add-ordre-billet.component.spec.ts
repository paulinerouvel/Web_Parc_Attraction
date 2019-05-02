import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdreBilletComponent } from './add-ordre-billet.component';

describe('AddOrdreBilletComponent', () => {
  let component: AddOrdreBilletComponent;
  let fixture: ComponentFixture<AddOrdreBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrdreBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdreBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
