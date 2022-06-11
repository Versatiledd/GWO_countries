import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContinentsComponent } from './continents/continents.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'africa',
    loadChildren: () =>
      import('./country-list/country-module').then((m) => m.CountryModule),
  },
  {
    path: 'americas',
    loadChildren: () =>
      import('./country-list/country-module').then((m) => m.CountryModule),
  },
  {
    path: 'asia',
    loadChildren: () =>
      import('./country-list/country-module').then((m) => m.CountryModule),
  },
  {
    path: 'europe',
    loadChildren: () =>
      import('./country-list/country-module').then((m) => m.CountryModule),
  },
  {
    path: 'oceania',
    loadChildren: () =>
      import('./country-list/country-module').then((m) => m.CountryModule),
  },
  { path: '', component: ContinentsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
