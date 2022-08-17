import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionToTutorialTopComponent } from './transition-to-tutorial-top.component';

describe('TransitionToTutorialTopComponent', () => {
  let component: TransitionToTutorialTopComponent;
  let fixture: ComponentFixture<TransitionToTutorialTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionToTutorialTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionToTutorialTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
