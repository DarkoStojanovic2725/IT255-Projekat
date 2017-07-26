import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistribucijaComponent } from './distribucija.component';

describe('DistribucijaComponent', () => {
  let component: DistribucijaComponent;
  let fixture: ComponentFixture<DistribucijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistribucijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistribucijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
