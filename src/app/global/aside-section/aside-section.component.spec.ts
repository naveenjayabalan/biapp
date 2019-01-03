import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSectionComponent } from './aside-section.component';

describe('AsideSectionComponent', () => {
  let component: AsideSectionComponent;
  let fixture: ComponentFixture<AsideSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
