import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBilletComponent } from './add-billet.component';

describe('AddBilletComponent', () => {
  let component: AddBilletComponent;
  let fixture: ComponentFixture<AddBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
