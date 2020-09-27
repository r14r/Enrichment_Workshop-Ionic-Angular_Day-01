import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EasyFormattingPage } from './easy-formatting.page';

const routes: Routes = [
  {
    path: '',
    component: EasyFormattingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EasyFormattingPage]
})
export class EasyFormattingPageModule {}
