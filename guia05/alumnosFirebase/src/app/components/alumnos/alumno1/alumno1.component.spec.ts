import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alumno1Component } from './alumno1.component';

describe('Alumno1Component', () => {
  let component: Alumno1Component;
  let fixture: ComponentFixture<Alumno1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alumno1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alumno1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
