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
    path: 'cadastrar-veiculo',
    loadChildren:
      './pages/cadastrar-veiculo/cadastrar-veiculo.module#CadastrarVeiculoPageModule'
  },
  {
    path: 'reservar-vaga',
    loadChildren:
      './pages/reservar-vaga/reservar-vaga.module#ReservarVagaPageModule'
  },
  {
    path: 'adicionar-creditos',
    loadChildren:
      './pages/adicionar-creditos/adicionar-creditos.module#AdicionarCreditosPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
