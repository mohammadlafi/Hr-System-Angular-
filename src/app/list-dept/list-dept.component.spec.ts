import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeptComponent } from './list-dept.component';

describe('ListDeptComponent', () => {
  let component: ListDeptComponent;
  let fixture: ComponentFixture<ListDeptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDeptComponent]
    });
    fixture = TestBed.createComponent(ListDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
