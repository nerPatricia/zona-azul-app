import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CadastrarUsuarioPage } from './cadastrar-usuario.page';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  {
    path: '',
    component: CadastrarUsuarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppHeaderModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarUsuarioPage]
})
export class CadastrarUsuarioPageModule {}
