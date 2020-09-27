import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HTMLDemo103Page } from './htmldemo103.page';

const routes: Routes = [
  {
    path: '',
    component: HTMLDemo103Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HTMLDemo103Page]
})
export class HTMLDemo103PageModule {}
