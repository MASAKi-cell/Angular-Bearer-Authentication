import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistcomplateComponent } from './registcomplate.component';

describe('RegistcomplateComponent', () => {
  let component: RegistcomplateComponent;
  let fixture: ComponentFixture<RegistcomplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistcomplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistcomplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
