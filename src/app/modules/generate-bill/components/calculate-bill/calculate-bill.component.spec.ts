import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBillComponent } from './calculate-bill.component';

describe('CalculateBillComponent', () => {
  let component: CalculateBillComponent;
  let fixture: ComponentFixture<CalculateBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateBillComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
