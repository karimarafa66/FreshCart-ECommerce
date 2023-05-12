import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsliderComponent } from './catslider.component';

describe('CatsliderComponent', () => {
  let component: CatsliderComponent;
  let fixture: ComponentFixture<CatsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
