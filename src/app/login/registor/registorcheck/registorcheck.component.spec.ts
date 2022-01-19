import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorcheckComponent } from './registorcheck.component';

describe('RegistorcheckComponent', () => {
  let component: RegistorcheckComponent;
  let fixture: ComponentFixture<RegistorcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistorcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
