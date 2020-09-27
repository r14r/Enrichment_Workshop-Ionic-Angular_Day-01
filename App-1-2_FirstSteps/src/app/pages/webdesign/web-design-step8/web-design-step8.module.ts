import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WebDesignStep8Page } from './web-design-step8.page';

const routes: Routes = [
  {
    path: '',
    component: WebDesignStep8Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WebDesignStep8Page]
})
export class WebDesignStep8PageModule {}
