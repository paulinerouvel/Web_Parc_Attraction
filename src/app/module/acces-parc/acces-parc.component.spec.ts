import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesParcComponent } from './acces-parc.component';

describe('AccesParcComponent', () => {
  let component: AccesParcComponent;
  let fixture: ComponentFixture<AccesParcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesParcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
