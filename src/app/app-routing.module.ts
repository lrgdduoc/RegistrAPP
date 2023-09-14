import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'accesodocente',
    loadChildren: () => import('./accesodocente/accesodocente.module').then( m => m.AccesodocentePageModule)
  },
  {
    path: 'accesoestudiantes',
    loadChildren: () => import('./accesoestudiantes/accesoestudiantes.module').then( m => m.AccesoestudiantesPageModule)
  },
  {
    path: 'recuperarcontrasena',
    loadChildren: () => import('./recuperarcontrasena/recuperarcontrasena.module').then( m => m.RecuperarcontrasenaPageModule)
  },
  {
    path: 'casa',
    loadChildren: () => import('./casa/casa.module').then( m => m.CasaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
