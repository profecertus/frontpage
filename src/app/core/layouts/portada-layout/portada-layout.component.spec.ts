import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaLayoutComponent } from './portada-layout.component';

describe('PortadaLayoutComponent', () => {
  let component: PortadaLayoutComponent;
  let fixture: ComponentFixture<PortadaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
