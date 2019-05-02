import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesBilletsComponent } from './mes-billets.component';

describe('MesBilletsComponent', () => {
  let component: MesBilletsComponent;
  let fixture: ComponentFixture<MesBilletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesBilletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesBilletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
