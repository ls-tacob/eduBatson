import { Routes } from '@angular/router';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { LoginComponent } from './modules/auth/login/login.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirige a /login
  { path: 'login', component: LoginComponent }, // Define la ruta de login
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {path: 'dashboard',
    loadChildren: ()=> import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule);
  }
];
