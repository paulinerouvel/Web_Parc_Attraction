import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatBilletInfoComponent } from './achat-billet-info.component';

describe('AchatBilletInfoComponent', () => {
  let component: AchatBilletInfoComponent;
  let fixture: ComponentFixture<AchatBilletInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatBilletInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatBilletInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
