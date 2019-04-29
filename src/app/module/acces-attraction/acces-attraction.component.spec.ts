import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesAttractionComponent } from './acces-attraction.component';

describe('AccesAttractionComponent', () => {
  let component: AccesAttractionComponent;
  let fixture: ComponentFixture<AccesAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
