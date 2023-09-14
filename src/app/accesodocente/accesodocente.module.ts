import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesodocentePageRoutingModule } from './accesodocente-routing.module';

import { AccesodocentePage } from './accesodocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesodocentePageRoutingModule
  ],
  declarations: [AccesodocentePage]
})
export class AccesodocentePageModule {}
