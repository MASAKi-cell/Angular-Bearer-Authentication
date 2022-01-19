import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistchangeComponent } from './registchange.component';

describe('RegistchangeComponent', () => {
  let component: RegistchangeComponent;
  let fixture: ComponentFixture<RegistchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
