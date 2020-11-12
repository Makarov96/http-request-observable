import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrabajoComponent } from './form-trabajo.component';

describe('FormTrabajoComponent', () => {
  let component: FormTrabajoComponent;
  let fixture: ComponentFixture<FormTrabajoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTrabajoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
