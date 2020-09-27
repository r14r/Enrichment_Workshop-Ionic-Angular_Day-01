import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSSDemo202Page } from './cssdemo202.page';

const routes: Routes = [
  {
    path: '',
    component: CSSDemo202Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CSSDemo202Page]
})
export class CSSDemo202PageModule {}
