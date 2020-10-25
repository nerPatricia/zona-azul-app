import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:
      './pages/home/home.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren:
      './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'cadastrar-usuario',
    loadChildren:
      './pages/cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule'
  },
  {
    path: 'dashboard',
    loadChildren:
      './pages/dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'reservar-vaga',
    loadChildren:
      './pages/reservar-vaga/reservar-vaga.module#ReservarVagaPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
