import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexListPageComponent } from './PokedexListPage.component';

describe('Page2Component', () => {
  let component: PokedexListPageComponent;
  let fixture: ComponentFixture<PokedexListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexListPageComponent]
    });
    fixture = TestBed.createComponent(PokedexListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
