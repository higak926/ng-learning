import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltEnvironmentComponent } from './built-environment.component';

describe('BuiltEnvironmentComponent', () => {
  let component: BuiltEnvironmentComponent;
  let fixture: ComponentFixture<BuiltEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
