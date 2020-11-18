import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhtmlquestionComponent } from './addhtmlquestion.component';

describe('AddhtmlquestionComponent', () => {
  let component: AddhtmlquestionComponent;
  let fixture: ComponentFixture<AddhtmlquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhtmlquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhtmlquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
