import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuiltEnvironmentComponent } from './built-environment/built-environment.component';
import { TutorialComponent } from './tutorials/tutorial/tutorial.component';
import { BeforeTutorialComponent } from './before-tutorial/before-tutorial.component';

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
];

@NgModule({
  declarations: [
    BuiltEnvironmentComponent,
    TutorialComponent,
    BeforeTutorialComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class LearnModule {}
