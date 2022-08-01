import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeTutorialComponent } from './before-tutorial.component';

describe('BeforeTutorialComponent', () => {
  let component: BeforeTutorialComponent;
  let fixture: ComponentFixture<BeforeTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
