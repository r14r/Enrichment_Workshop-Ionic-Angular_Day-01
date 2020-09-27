import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSSDemo101Page } from './cssdemo101.page';

const routes: Routes = [
  {
    path: '',
    component: CSSDemo101Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CSSDemo101Page]
})
export class CSSDemo101PageModule {}
