import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLegendariesComponent } from './list-legendaries.component';

describe('ListLegendariesComponent', () => {
  let component: ListLegendariesComponent;
  let fixture: ComponentFixture<ListLegendariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLegendariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLegendariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
