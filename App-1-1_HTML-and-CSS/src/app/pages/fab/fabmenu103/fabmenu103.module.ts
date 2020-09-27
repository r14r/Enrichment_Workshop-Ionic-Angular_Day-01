import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FABMenu103Page } from './fabmenu103.page';

const routes: Routes = [
  {
    path: '',
    component: FABMenu103Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FABMenu103Page]
})
export class FABMenu103PageModule {}
