import { ToastService } from './../../service/toast.service';
import { NgxMaskModule } from 'ngx-mask';
import { ReservarVagaPage } from './reservar-vaga.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ReservarVagaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AppHeaderModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  providers: [ToastService],
  declarations: [ReservarVagaPage]
})
export class ReservarVagaPageModule {}
