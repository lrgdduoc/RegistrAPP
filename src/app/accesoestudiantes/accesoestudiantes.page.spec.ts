import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesoestudiantesPage } from './accesoestudiantes.page';

describe('AccesoestudiantesPage', () => {
  let component: AccesoestudiantesPage;
  let fixture: ComponentFixture<AccesoestudiantesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesoestudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
