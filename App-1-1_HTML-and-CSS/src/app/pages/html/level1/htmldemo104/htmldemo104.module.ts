import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HTMLDemo104Page } from './htmldemo104.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLDemo104Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HTMLDemo104Page]
})
export class HTMLDemo104PageModule {}
