import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlutionComponent } from './ilution.component';

describe('IlutionComponent', () => {
  let component: IlutionComponent;
  let fixture: ComponentFixture<IlutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
