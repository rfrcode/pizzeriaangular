import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaslistComponent } from './pizzaslist.component';

describe('PizzaslistComponent', () => {
  let component: PizzaslistComponent;
  let fixture: ComponentFixture<PizzaslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
