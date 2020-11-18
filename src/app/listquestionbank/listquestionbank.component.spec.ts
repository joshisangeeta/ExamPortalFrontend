import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListquestionbankComponent } from './listquestionbank.component';

describe('ListquestionbankComponent', () => {
  let component: ListquestionbankComponent;
  let fixture: ComponentFixture<ListquestionbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListquestionbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListquestionbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
