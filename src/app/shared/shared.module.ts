import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TransitionToTopComponent } from './transition-to-top/transition-to-top.component';

@NgModule({
  declarations: [ProgressSpinnerComponent, TransitionToTopComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ProgressSpinnerComponent, TransitionToTopComponent],
})
export class SharedModule {}
