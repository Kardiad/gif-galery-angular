import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadsComponent } from './lazyloads.component';

describe('LazyloadsComponent', () => {
  let component: LazyloadsComponent;
  let fixture: ComponentFixture<LazyloadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LazyloadsComponent]
    });
    fixture = TestBed.createComponent(LazyloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
