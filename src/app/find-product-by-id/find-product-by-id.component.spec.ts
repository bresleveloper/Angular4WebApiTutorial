import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindProductByIdComponent } from './find-product-by-id.component';

describe('FindProductByIdComponent', () => {
  let component: FindProductByIdComponent;
  let fixture: ComponentFixture<FindProductByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindProductByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
