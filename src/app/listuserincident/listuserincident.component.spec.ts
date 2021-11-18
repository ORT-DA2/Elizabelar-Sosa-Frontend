import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserincidentComponent } from './listuserincident.component';

describe('ListuserincidentComponent', () => {
  let component: ListuserincidentComponent;
  let fixture: ComponentFixture<ListuserincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListuserincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
