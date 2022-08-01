import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionToTopComponent } from './transition-to-top.component';

describe('TransitionToTopComponent', () => {
  let component: TransitionToTopComponent;
  let fixture: ComponentFixture<TransitionToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionToTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
