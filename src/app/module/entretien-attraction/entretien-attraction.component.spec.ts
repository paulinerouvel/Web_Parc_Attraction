import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntretienAttractionComponent } from './entretien-attraction.component';

describe('EntretienAttractionComponent', () => {
  let component: EntretienAttractionComponent;
  let fixture: ComponentFixture<EntretienAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntretienAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntretienAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
