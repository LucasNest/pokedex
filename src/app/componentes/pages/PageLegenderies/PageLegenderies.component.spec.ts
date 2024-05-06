import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLegenderiesComponent } from './PageLegenderies.component';

describe('Page3Component', () => {
  let component: PageLegenderiesComponent;
  let fixture: ComponentFixture<PageLegenderiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageLegenderiesComponent]
    });
    fixture = TestBed.createComponent(PageLegenderiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});