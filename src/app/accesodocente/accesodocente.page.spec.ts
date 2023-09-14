import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesodocentePage } from './accesodocente.page';

describe('AccesodocentePage', () => {
  let component: AccesodocentePage;
  let fixture: ComponentFixture<AccesodocentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccesodocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
