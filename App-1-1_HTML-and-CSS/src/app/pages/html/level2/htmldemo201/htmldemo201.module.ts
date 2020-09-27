import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HTMLDemo201Page } from './htmldemo201.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLDemo201Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HTMLDemo201Page]
})
export class HTMLDemo201PageModule {}
