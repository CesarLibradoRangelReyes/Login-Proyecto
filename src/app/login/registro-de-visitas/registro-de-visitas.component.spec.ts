import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDeVisitasComponent } from './registro-de-visitas.component';

describe('RegistroDeVisitasComponent', () => {
  let component: RegistroDeVisitasComponent;
  let fixture: ComponentFixture<RegistroDeVisitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDeVisitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDeVisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
