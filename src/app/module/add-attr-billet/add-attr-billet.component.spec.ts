import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAttrBilletComponent } from './add-attr-billet.component';

describe('AddAttrBilletComponent', () => {
  let component: AddAttrBilletComponent;
  let fixture: ComponentFixture<AddAttrBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAttrBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAttrBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
