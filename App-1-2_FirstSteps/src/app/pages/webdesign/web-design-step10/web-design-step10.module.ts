import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WebDesignStep10Page } from './web-design-step10.page';

const routes: Routes = [
  {
    path: '',
    component: WebDesignStep10Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebDesignStep10Page]
})
export class WebDesignStep10PageModule {}
