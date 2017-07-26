import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumiComponent } from './albumi.component';

describe('AlbumiComponent', () => {
  let component: AlbumiComponent;
  let fixture: ComponentFixture<AlbumiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
