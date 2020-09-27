import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSSDemo105Page } from './cssdemo105.page';

const routes: Routes = [
  {
    path: '',
    component: CSSDemo105Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CSSDemo105Page]
})
export class CSSDemo105PageModule {}
