import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSSDemo204Page } from './cssdemo204.page';

const routes: Routes = [
  {
    path: '',
    component: CSSDemo204Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CSSDemo204Page]
})
export class CSSDemo204PageModule {}
