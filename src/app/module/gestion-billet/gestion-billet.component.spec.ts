import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionBilletComponent } from './gestion-billet.component';

describe('GestionBilletComponent', () => {
  let component: GestionBilletComponent;
  let fixture: ComponentFixture<GestionBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
