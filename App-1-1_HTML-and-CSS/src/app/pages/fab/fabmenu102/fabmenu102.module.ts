import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FABMenu102Page } from './fabmenu102.page';

const routes: Routes = [
  {
    path: '',
    component: FABMenu102Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FABMenu102Page]
})
export class FABMenu102PageModule {}
