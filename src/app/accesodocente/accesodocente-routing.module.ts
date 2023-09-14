import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesodocentePage } from './accesodocente.page';

const routes: Routes = [
  {
    path: '',
    component: AccesodocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesodocentePageRoutingModule {}
