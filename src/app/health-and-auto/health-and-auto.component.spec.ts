import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndAutoComponent } from './health-and-auto.component';

describe('HealthAndAutoComponent', () => {
  let component: HealthAndAutoComponent;
  let fixture: ComponentFixture<HealthAndAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthAndAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthAndAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
