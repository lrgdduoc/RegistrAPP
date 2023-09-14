import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accesodocente',
  templateUrl: './accesodocente.page.html',
  styleUrls: ['./accesodocente.page.scss'],

  animations: [ // Agrega las animaciones aquí
  trigger('vibrate', [
    state('vibrating', style({ transform: 'translateX(5px)' })),
    state('not-vibrating', style({ transform: 'translateX(0)' })),
    transition('not-vibrating => vibrating', animate('10s ease-in')),
    transition('vibrating => not-vibrating', animate('10s ease-out'))
  ])
  
]

})
export class AccesodocentePage implements OnInit {

  //userEmail: string | undefined;
  data: any; // Generamos una variable Any (permite cualquier valor)

  constructor(private activeroute: ActivatedRoute, private router: Router) {
     // Se llama a la ruta activa y se obtiene sus parametros mediante una subscripcion
     this.activeroute.queryParams.subscribe(params => { // Utilizamos lambda

      const currentNavigation = this.router.getCurrentNavigation();
      if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
        this.data = currentNavigation.extras.state['user'];
      } else {
        this.router.navigate(['/home']);
      }

    });   
   }

  ngOnInit() {

    
  }



}
