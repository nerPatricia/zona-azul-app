import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastrar-usuario',
    loadChildren: () =>
      import('./pages/cadastrar-usuario/cadastrar-usuario.module').then(m => m.CadastrarUsuarioPageModule)
  },
  {
    path: 'reservar-vaga',
    loadChildren: () =>
      import('./pages/reservar-vaga/reservar-vaga.module').then(m => m.ReservarVagaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
