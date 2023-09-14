import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string = '';
  password: string = '';
  

  constructor(private router: Router, private alertController: AlertController) {}
  

  async iniciarSesion() {
    if (this.email === 'docente') {
      //this.mostrarPopupBienvenida(this.email);

      const navigationExtras: NavigationExtras = {
        state: { user: this.email }
      };
  
      // Realizar la redirección a la página de acceso para docentes
      await this.router.navigate(['/accesodocente'], navigationExtras);
    } else {
      //this.mostrarPopupBienvenida(this.email);

      const navigationExtras: NavigationExtras = {
        state: { user: this.email }
      };
  
      // Realizar la redirección a la página de acceso para estudiantes
      await this.router.navigate(['/accesoestudiantes'], navigationExtras);
    }
  }

  async mostrarPopupBienvenida(email: string) {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: `¡Bienvenido ${email}!`,
      buttons: ['OK']
    });

    await alert.present();
  }


  
  async recuperacontrasena() {
      const navigationExtras: NavigationExtras = {
        state: { user: this.email }
      };
  
      // Realizar la redirección a la página de acceso para docentes
      await this.router.navigate(['/recuperarcontrasena'], navigationExtras);
    
  }


}
