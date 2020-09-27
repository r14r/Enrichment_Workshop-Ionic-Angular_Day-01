import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CSS03Grid1Page } from './css03-grid.page';

const routes: Routes = [
    {
        path: '',
        component: CSS03Grid1Page
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CSS03Grid1Page]
})
export class CSS03Grid1PageModule { }
