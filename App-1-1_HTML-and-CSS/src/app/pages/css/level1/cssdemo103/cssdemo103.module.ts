import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSSDemo103Page } from './cssdemo103.page';

const routes: Routes = [
  {
    path: '',
    component: CSSDemo103Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CSSDemo103Page]
})
export class CSSDemo103PageModule {}
