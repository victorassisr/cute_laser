import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhorEnvioComponent } from './melhor-envio.component';

describe('MelhorEnvioComponent', () => {
  let component: MelhorEnvioComponent;
  let fixture: ComponentFixture<MelhorEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhorEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MelhorEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
