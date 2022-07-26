import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuiltEnvironmentComponent } from './built-environment/built-environment.component';

const routes: Routes = [
  {
    path: 'built-env',
    component: BuiltEnvironmentComponent,
  },
];

@NgModule({
  declarations: [BuiltEnvironmentComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class LearnModule {}
