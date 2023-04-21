import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoRegistroReclamoComponent } from './aviso-registro-reclamo.component';

describe('AvisoRegistroReclamoComponent', () => {
  let component: AvisoRegistroReclamoComponent;
  let fixture: ComponentFixture<AvisoRegistroReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoRegistroReclamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoRegistroReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
