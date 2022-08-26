import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BuiltEnvironmentComponent } from './built-environment/built-environment.component';
import { TutorialComponent } from './tutorials/tutorial/tutorial.component';
import { BeforeTutorialComponent } from './before-tutorial/before-tutorial.component';
import { InitProjectComponent } from './tutorials/tutorial/init-project/init-project.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

const routes: Routes = [
  {
    path: 'built-env',
    component: BuiltEnvironmentComponent,
  },
  {
    path: 'before-tutorial',
    component: BeforeTutorialComponent,
  },
  {
    path: 'tutorial',
    component: TutorialComponent,
  },
  {
    path: 'tutorial/init-project',
    component: InitProjectComponent,
  },
];

@NgModule({
  declarations: [
    BuiltEnvironmentComponent,
    TutorialComponent,
    BeforeTutorialComponent,
    InitProjectComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, NzCollapseModule],
  providers: [],
})
export class LearnModule {}
