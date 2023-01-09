import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaLoginComponent } from './ventana-login.component';

describe('VentanaLoginComponent', () => {
  let component: VentanaLoginComponent;
  let fixture: ComponentFixture<VentanaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
