import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionlistComponent } from './addquestionlist.component';

describe('AddquestionlistComponent', () => {
  let component: AddquestionlistComponent;
  let fixture: ComponentFixture<AddquestionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddquestionlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquestionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
