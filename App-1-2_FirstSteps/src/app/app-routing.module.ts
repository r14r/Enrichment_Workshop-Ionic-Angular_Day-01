import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
	{ path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListPageModule) },
	{ path: 'demo', loadChildren: './demo/demo.module#DemoPageModule' },
	{ path: 'step01_start', loadChildren: './pages/webdesign/web-design-step1/web-design-step1.module#WebDesignStep1PageModule' },
	{ path: 'step02_content', loadChildren: './pages/webdesign/web-design-step2/web-design-step2.module#WebDesignStep2PageModule' },
	{ path: 'step03_centering', loadChildren: './pages/webdesign/web-design-step3/web-design-step3.module#WebDesignStep3PageModule' },
	{ path: 'step04_font-family', loadChildren: './pages/webdesign/web-design-step4/web-design-step4.module#WebDesignStep4PageModule' },
	{ path: 'step05_spacing', loadChildren: './pages/webdesign/web-design-step5/web-design-step5.module#WebDesignStep5PageModule' },
	{ path: 'step06_color-contrast', loadChildren: './pages/webdesign/web-design-step6/web-design-step6.module#WebDesignStep6PageModule' },
	{ path: 'step07_balance', loadChildren: './pages/webdesign/web-design-step7/web-design-step7.module#WebDesignStep7PageModule' },
	{ path: 'step08_primary-color', loadChildren: './pages/webdesign/web-design-step8/web-design-step8.module#WebDesignStep8PageModule' },
	{ path: 'step09_secondary-color', loadChildren: './pages/webdesign/web-design-step9/web-design-step9.module#WebDesignStep9PageModule' },
	{ path: 'step10_custom-font', loadChildren: './pages/webdesign/web-design-step10/web-design-step10.module#WebDesignStep10PageModule' },
	{ path: 'step11_images', loadChildren: './pages/webdesign/web-design-step11/web-design-step11.module#WebDesignStep11PageModule' },
	{ path: 'step12_share', loadChildren: './pages/webdesign/web-design-step12/web-design-step12.module#WebDesignStep12PageModule' },
  { path: 'web-design-step12', loadChildren: './pages/webdesign/web-design-step12/web-design-step12.module#WebDesignStep12PageModule' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
