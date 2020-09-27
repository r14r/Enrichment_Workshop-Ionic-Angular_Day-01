import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HTMLDemo101Page } from './htmldemo101.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLDemo101Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HTMLDemo101Page]
})
export class HTMLDemo101PageModule {}
