import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from 'src/app/top/top.component';
import { ErrorComponent } from 'src/app/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
