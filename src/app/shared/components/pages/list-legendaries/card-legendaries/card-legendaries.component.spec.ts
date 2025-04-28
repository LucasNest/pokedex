import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLegendariesComponent } from './card-legendaries.component';

describe('CardLegendariesComponent', () => {
  let component: CardLegendariesComponent;
  let fixture: ComponentFixture<CardLegendariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLegendariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLegendariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
