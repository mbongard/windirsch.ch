import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
