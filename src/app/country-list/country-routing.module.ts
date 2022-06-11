import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from '../test/test.component';

import { CountryListComponent } from './country-list.component';

const routes: Routes = [
  {
    path: '',
    component: CountryListComponent,
  },
  {
    path: ':country',
    component: TestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryRoutingModule {}
