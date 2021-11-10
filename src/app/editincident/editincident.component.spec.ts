import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditincidentComponent } from './editincident.component';

describe('EditincidentComponent', () => {
  let component: EditincidentComponent;
  let fixture: ComponentFixture<EditincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
