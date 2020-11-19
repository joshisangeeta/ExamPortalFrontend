import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterstudentloginComponent } from './afterstudentlogin.component';

describe('AfterstudentloginComponent', () => {
  let component: AfterstudentloginComponent;
  let fixture: ComponentFixture<AfterstudentloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterstudentloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterstudentloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
