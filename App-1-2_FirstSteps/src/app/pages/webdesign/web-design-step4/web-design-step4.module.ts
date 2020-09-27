import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WebDesignStep4Page } from './web-design-step4.page';

const routes: Routes = [
  {
    path: '',
    component: WebDesignStep4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebDesignStep4Page]
})
export class WebDesignStep4PageModule {}
