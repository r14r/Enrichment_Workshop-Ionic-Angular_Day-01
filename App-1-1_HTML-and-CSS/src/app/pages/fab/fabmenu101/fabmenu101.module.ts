import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FABMenu101Page } from './fabmenu101.page';

const routes: Routes = [
  {
    path: '',
    component: FABMenu101Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FABMenu101Page]
})
export class FABMenu101PageModule {}
