import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatBilletComponent } from './achat-billet.component';

describe('AchatBilletComponent', () => {
  let component: AchatBilletComponent;
  let fixture: ComponentFixture<AchatBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
