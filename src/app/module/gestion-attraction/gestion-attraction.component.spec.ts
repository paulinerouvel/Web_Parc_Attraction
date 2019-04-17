import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAttractionComponent } from './gestion-attraction.component';

describe('GestionAttractionComponent', () => {
  let component: GestionAttractionComponent;
  let fixture: ComponentFixture<GestionAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
