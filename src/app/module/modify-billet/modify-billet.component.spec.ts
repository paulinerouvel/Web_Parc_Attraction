import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBilletComponent } from './modify-billet.component';

describe('ModifyBilletComponent', () => {
  let component: ModifyBilletComponent;
  let fixture: ComponentFixture<ModifyBilletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyBilletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyBilletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
