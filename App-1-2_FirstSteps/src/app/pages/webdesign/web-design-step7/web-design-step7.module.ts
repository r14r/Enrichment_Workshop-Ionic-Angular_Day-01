import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WebDesignStep7Page } from './web-design-step7.page';

const routes: Routes = [
  {
    path: '',
    component: WebDesignStep7Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebDesignStep7Page]
})
export class WebDesignStep7PageModule {}
