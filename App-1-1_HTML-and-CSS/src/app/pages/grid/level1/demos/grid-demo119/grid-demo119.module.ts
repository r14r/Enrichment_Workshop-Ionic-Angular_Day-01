import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridDemo119Page } from './grid-demo119.page';

const routes: Routes = [
  {
    path: '',
    component: GridDemo119Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridDemo119Page]
})
export class GridDemo119PageModule {}
