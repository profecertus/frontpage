import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReclamoComponent } from './buscar-reclamo.component';

describe('BuscarReclamoComponent', () => {
  let component: BuscarReclamoComponent;
  let fixture: ComponentFixture<BuscarReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarReclamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
