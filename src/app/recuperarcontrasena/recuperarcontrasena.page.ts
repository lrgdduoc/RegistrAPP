import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {
  data: any; // Generamos una variable Any (permite cualquier valor)
  usuarioInput: string = ''; // Declaración de usuarioInput

  constructor(
    private activeroute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController // Agregamos el servicio del AlertController
  ) {
    // Se llama a la ruta activa y se obtienen sus parámetros mediante una suscripción
    this.activeroute.queryParams.subscribe((params) => {
      const currentNavigation = this.router.getCurrentNavigation();

      console.log('a ' + currentNavigation);

      if (currentNavigation && currentNavigation.extras && currentNavigation.extras.state) {
        this.data = currentNavigation.extras.state['user'];
      } else {
        this.router.navigate(['/home']);
      }
    });
  }

  async recuperarContrasena() {
    // Ahora puedes acceder al valor de usuarioInput
    const usuarioInputValue = this.usuarioInput;

    // Aquí debes agregar la lógica para enviar el correo con la nueva contraseña.
    // Por ahora, simularemos el envío del correo.

    // Simulación del envío del correo con la nueva contraseña
    const nuevaContrasena = 'tu_nueva_contrasena';

    // Muestra el mensaje emergente
    const alert = await this.alertController.create({
      header: 'Correo Enviado',
      message: `Se ha enviado un correo con una nueva contraseña a ${usuarioInputValue}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {}
}

