import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilVisiteurComponent } from './accueil-visiteur.component';

describe('AccueilVisiteurComponent', () => {
  let component: AccueilVisiteurComponent;
  let fixture: ComponentFixture<AccueilVisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilVisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
