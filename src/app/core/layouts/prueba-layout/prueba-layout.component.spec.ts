import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaLayoutComponent } from './prueba-layout.component';

describe('PruebaLayoutComponent', () => {
  let component: PruebaLayoutComponent;
  let fixture: ComponentFixture<PruebaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
