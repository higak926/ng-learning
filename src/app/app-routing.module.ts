import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from 'src/app/top/top.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { BuiltEnvironmentComponent } from 'src/app/learn/built-environment/built-environment.component';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: () =>
      import('src/app/top/top.module').then((m) => m.TopModule),
  },
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  {
    path: 'learn',
    loadChildren: () =>
      import('src/app/learn/learn.module').then((m) => m.LearnModule),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
