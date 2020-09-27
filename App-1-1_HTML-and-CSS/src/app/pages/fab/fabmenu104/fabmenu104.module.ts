import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FABMenu104Page } from './fabmenu104.page';

const routes: Routes = [
  {
    path: '',
    component: FABMenu104Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FABMenu104Page]
})
export class FABMenu104PageModule {}
