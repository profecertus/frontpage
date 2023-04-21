import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidaDocumentoComponent } from './valida-documento.component';

describe('ValidaDocumentoComponent', () => {
  let component: ValidaDocumentoComponent;
  let fixture: ComponentFixture<ValidaDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidaDocumentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
