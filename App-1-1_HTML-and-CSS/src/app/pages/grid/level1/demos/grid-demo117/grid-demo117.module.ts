import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridDemo117Page } from './grid-demo117.page';

const routes: Routes = [
    {
        path: '',
        component: GridDemo117Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [GridDemo117Page]
})
export class GridDemo117PageModule {

}
