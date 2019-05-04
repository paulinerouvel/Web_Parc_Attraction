import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAttractionComponent } from './select-attraction.component';

describe('SelectAttractionComponent', () => {
  let component: SelectAttractionComponent;
  let fixture: ComponentFixture<SelectAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
