import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PequenaComponent } from './pequena.component';

describe('PequenaComponent', () => {
  let component: PequenaComponent;
  let fixture: ComponentFixture<PequenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PequenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PequenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
