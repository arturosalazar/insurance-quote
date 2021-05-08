import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthQuoteComponent } from './health-quote.component';

describe('HealthQuoteComponent', () => {
  let component: HealthQuoteComponent;
  let fixture: ComponentFixture<HealthQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthQuoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
