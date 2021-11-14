import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserprojectComponent } from './adduserproject.component';

describe('AdduserprojectComponent', () => {
  let component: AdduserprojectComponent;
  let fixture: ComponentFixture<AdduserprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
