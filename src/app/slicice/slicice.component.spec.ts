import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliciceComponent } from './slicice.component';

describe('SliciceComponent', () => {
  let component: SliciceComponent;
  let fixture: ComponentFixture<SliciceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliciceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
