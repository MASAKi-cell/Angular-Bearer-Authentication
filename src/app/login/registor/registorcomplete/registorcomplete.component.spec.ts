import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorcompleteComponent } from './registorcomplete.component';

describe('RegistorcompleteComponent', () => {
  let component: RegistorcompleteComponent;
  let fixture: ComponentFixture<RegistorcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistorcompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
