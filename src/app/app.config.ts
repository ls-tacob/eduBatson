import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router'; // Aquí importas RouterModule
import { appRoutes } from './app.routes'; // Importa tus rutas aquí
import { ReactiveFormsModule } from '@angular/forms';

export const appConfig = {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes)), // Aquí configuras las rutas
    importProvidersFrom(ReactiveFormsModule)
  ],
};
