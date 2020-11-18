import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavatestComponent } from './javatest.component';

describe('JavatestComponent', () => {
  let component: JavatestComponent;
  let fixture: ComponentFixture<JavatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
