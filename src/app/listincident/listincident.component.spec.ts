import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListincidentComponent } from './listincident.component';

describe('ListincidentComponent', () => {
  let component: ListincidentComponent;
  let fixture: ComponentFixture<ListincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
