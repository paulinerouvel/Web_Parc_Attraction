import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyParcComponent } from './modify-parc.component';

describe('ModifyParcComponent', () => {
  let component: ModifyParcComponent;
  let fixture: ComponentFixture<ModifyParcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyParcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
