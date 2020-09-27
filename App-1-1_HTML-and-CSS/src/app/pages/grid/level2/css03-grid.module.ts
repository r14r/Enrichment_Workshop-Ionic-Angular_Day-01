import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSS03Grid2Page } from './css03-grid.page';

const routes: Routes = [
    {
        path: '',
        component: CSS03Grid2Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CSS03Grid2Page]
})
export class CSS03Grid2PageModule { }
