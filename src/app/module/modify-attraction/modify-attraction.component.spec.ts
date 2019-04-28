import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAttractionComponent } from './modify-attraction.component';

describe('ModifyAttractionComponent', () => {
  let component: ModifyAttractionComponent;
  let fixture: ComponentFixture<ModifyAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
