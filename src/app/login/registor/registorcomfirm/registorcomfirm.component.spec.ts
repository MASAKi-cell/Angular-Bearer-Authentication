import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorcomfirmComponent } from './registorcomfirm.component';

describe('RegistorcomfirmComponent', () => {
  let component: RegistorcomfirmComponent;
  let fixture: ComponentFixture<RegistorcomfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistorcomfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorcomfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
