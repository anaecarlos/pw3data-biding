import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorpertyBindingComponent } from './porperty-binding.component';

describe('PorpertyBindingComponent', () => {
  let component: PorpertyBindingComponent;
  let fixture: ComponentFixture<PorpertyBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorpertyBindingComponent]
    });
    fixture = TestBed.createComponent(PorpertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
