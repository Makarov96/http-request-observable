import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnavbaruserComponent } from './snavbaruser.component';

describe('SnavbaruserComponent', () => {
  let component: SnavbaruserComponent;
  let fixture: ComponentFixture<SnavbaruserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnavbaruserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnavbaruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
