import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridDemo102Page } from './grid-demo102.page';

const routes: Routes = [
  {
    path: '',
    component: GridDemo102Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridDemo102Page]
})
export class GridDemo102PageModule {}
