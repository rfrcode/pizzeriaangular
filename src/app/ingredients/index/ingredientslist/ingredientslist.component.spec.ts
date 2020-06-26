import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientslistComponent } from './ingredientslist.component';

describe('IngredientslistComponent', () => {
  let component: IngredientslistComponent;
  let fixture: ComponentFixture<IngredientslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
