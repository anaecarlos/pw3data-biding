import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterpolationComponent } from './iterpolation.component';

describe('IterpolationComponent', () => {
  let component: IterpolationComponent;
  let fixture: ComponentFixture<IterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IterpolationComponent]
    });
    fixture = TestBed.createComponent(IterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
