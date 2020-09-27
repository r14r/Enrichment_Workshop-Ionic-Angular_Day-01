import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridDemo111Page } from './grid-demo111.page';

const routes: Routes = [
  {
    path: '',
    component: GridDemo111Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridDemo111Page]
})
export class GridDemo111PageModule {}
