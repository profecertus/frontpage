import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoPrevioReclamoComponent } from './aviso-previo-reclamo.component';

describe('AvisoPrevioReclamoComponentComponent', () => {
  let component: AvisoPrevioReclamoComponent;
  let fixture: ComponentFixture<AvisoPrevioReclamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoPrevioReclamoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisoPrevioReclamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
