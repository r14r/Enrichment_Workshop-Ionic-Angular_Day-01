import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridDemo106Page } from './grid-demo106.page';

const routes: Routes = [
    {
        path: '',
        component: GridDemo106Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [GridDemo106Page]
})
export class GridDemo106PageModule { }
