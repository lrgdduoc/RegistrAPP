import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesoestudiantesPageRoutingModule } from './accesoestudiantes-routing.module';

import { AccesoestudiantesPage } from './accesoestudiantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesoestudiantesPageRoutingModule
  ],
  declarations: [AccesoestudiantesPage]
})
export class AccesoestudiantesPageModule {}
