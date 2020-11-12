import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajospublicadosComponent } from './trabajospublicados.component';

describe('TrabajospublicadosComponent', () => {
  let component: TrabajospublicadosComponent;
  let fixture: ComponentFixture<TrabajospublicadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajospublicadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajospublicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
