import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavatestdisplayComponent } from './javatestdisplay.component';

describe('JavatestdisplayComponent', () => {
  let component: JavatestdisplayComponent;
  let fixture: ComponentFixture<JavatestdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavatestdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavatestdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
