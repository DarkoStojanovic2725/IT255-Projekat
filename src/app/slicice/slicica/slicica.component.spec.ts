import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlicicaComponent } from './slicica.component';

describe('SlicicaComponent', () => {
  let component: SlicicaComponent;
  let fixture: ComponentFixture<SlicicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlicicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlicicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
