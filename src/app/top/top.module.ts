import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TopComponent } from './top.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: TopComponent,
  },
];

@NgModule({
  declarations: [TopComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [],
})
export class TopModule {}
