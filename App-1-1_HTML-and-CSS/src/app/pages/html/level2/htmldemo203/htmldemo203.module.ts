import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HTMLDemo203Page } from './htmldemo203.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLDemo203Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HTMLDemo203Page]
})
export class HTMLDemo203PageModule {}
