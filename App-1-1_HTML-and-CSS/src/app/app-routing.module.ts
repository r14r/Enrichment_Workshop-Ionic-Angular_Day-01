import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },

	{ path: 'learn-html' ,		loadChildren: './pages/learning/html/learning.module#LearningHTMLPageModule' },
	{ path: 'learn-css' ,		loadChildren: './pages/learning/css/learning.module#LearningCSSPageModule' },
	{ path: 'learn-web' ,		loadChildren: './pages/learning/web/learning.module#LearningWebPageModule' },
	{ path: 'learn-js' ,		loadChildren: './pages/learning/js/learning.module#LearningJSPageModule' },
	{ path: 'learn-ionic' ,		loadChildren: './pages/learning/ionic/learning.module#LearningIonicPageModule' },

	{ path: 'html-1' ,			loadChildren: './pages/html/level1/htmldemo101/htmldemo101.module#HTMLDemo101PageModule' },
	{ path: 'html-1-01' ,		loadChildren: './pages/html/level1/htmldemo101/htmldemo101.module#HTMLDemo101PageModule' },
	{ path: 'html-1-02' ,		loadChildren: './pages/html/level1/htmldemo102/htmldemo102.module#HTMLDemo102PageModule' },
	{ path: 'html-1-03' ,		loadChildren: './pages/html/level1/htmldemo103/htmldemo103.module#HTMLDemo103PageModule' },
	{ path: 'html-1-05' ,		loadChildren: './pages/html/level1/htmldemo105/htmldemo105.module#HTMLDemo105PageModule' },
	{ path: 'html-1-04' ,		loadChildren: './pages/html/level1/htmldemo104/htmldemo104.module#HTMLDemo104PageModule' },

	{ path: 'html-2' ,			loadChildren: './pages/html/level2/htmldemo204/htmldemo204.module#HTMLDemo204PageModule' },
	{ path: 'html-2-01' ,		loadChildren: './pages/html/level2/htmldemo201/htmldemo201.module#HTMLDemo201PageModule' },
	{ path: 'html-2-02' ,		loadChildren: './pages/html/level2/htmldemo202/htmldemo202.module#HTMLDemo202PageModule' },
	{ path: 'html-2-03' ,		loadChildren: './pages/html/level2/htmldemo203/htmldemo203.module#HTMLDemo203PageModule' },
	{ path: 'html-2-04' ,		loadChildren: './pages/html/level2/htmldemo204/htmldemo204.module#HTMLDemo204PageModule' },
	{ path: 'html-2-05' ,		loadChildren: './pages/html/level2/htmldemo205/htmldemo205.module#HTMLDemo205PageModule' },

	{ path: 'css-1' ,			loadChildren: './pages/css/level1/cssdemo101/cssdemo101.module#CSSDemo101PageModule' },
	{ path: 'css-1-01' ,		loadChildren: './pages/css/level1/cssdemo101/cssdemo101.module#CSSDemo101PageModule' },
	{ path: 'css-1-02' ,		loadChildren: './pages/css/level1/cssdemo102/cssdemo102.module#CSSDemo102PageModule' },
	{ path: 'css-1-03' ,		loadChildren: './pages/css/level1/cssdemo103/cssdemo103.module#CSSDemo103PageModule' },
	{ path: 'css-1-04' ,		loadChildren: './pages/css/level1/cssdemo104/cssdemo104.module#CSSDemo104PageModule' },
	{ path: 'css-1-05' ,		loadChildren: './pages/css/level1/cssdemo105/cssdemo105.module#CSSDemo105PageModule' },

	{ path: 'css-2' ,			loadChildren: './pages/css/level2/cssdemo201/cssdemo201.module#CSSDemo201PageModule' },
	{ path: 'css-2-01' ,		loadChildren: './pages/css/level2/cssdemo201/cssdemo201.module#CSSDemo201PageModule' },
	{ path: 'css-2-02' ,		loadChildren: './pages/css/level2/cssdemo202/cssdemo202.module#CSSDemo202PageModule' },
	{ path: 'css-2-03' ,		loadChildren: './pages/css/level2/cssdemo203/cssdemo203.module#CSSDemo203PageModule' },
	{ path: 'css-2-04' ,		loadChildren: './pages/css/level2/cssdemo204/cssdemo204.module#CSSDemo204PageModule' },
	{ path: 'css-2-05' ,		loadChildren: './pages/css/level2/cssdemo205/cssdemo205.module#CSSDemo205PageModule' },

	{ path: 'home' ,			loadChildren: './pages/starter/home/home.module#HomePageModule' },
	{ path: 'list' ,			loadChildren: './pages/starter/list/list.module#ListPageModule' },

	{ path: 'table' ,			loadChildren: './pages/table/css04-table.module#CSS04TablePageModule' },

	{ path: 'grid-layouts',		loadChildren: './pages/grid/layout/magazine-layout/magazine-layout.module#MagazineLayoutPageModule' },
	{ path: 'grid-layout-01',	loadChildren: './pages/grid/layout/magazine-layout/magazine-layout.module#MagazineLayoutPageModule' },

	{ path: 'grid-1',			loadChildren: './pages/grid/level1/css03-grid.module#CSS03Grid1PageModule' },
	{ path: 'grid-1-01',		loadChildren: './pages/grid/level1/demos/grid-demo101/grid-demo101.module#GridDemo101PageModule' },
	{ path: 'grid-1-02' ,		loadChildren: './pages/grid/level1/demos/grid-demo102/grid-demo102.module#GridDemo102PageModule' },
	{ path: 'grid-1-03' ,		loadChildren: './pages/grid/level1/demos/grid-demo103/grid-demo103.module#GridDemo103PageModule' },
	{ path: 'grid-1-04' ,		loadChildren: './pages/grid/level1/demos/grid-demo104/grid-demo104.module#GridDemo104PageModule' },
	{ path: 'grid-1-05' ,		loadChildren: './pages/grid/level1/demos/grid-demo105/grid-demo105.module#GridDemo105PageModule' },
	{ path: 'grid-1-06' ,		loadChildren: './pages/grid/level1/demos/grid-demo106/grid-demo106.module#GridDemo106PageModule' },
	{ path: 'grid-1-07' ,		loadChildren: './pages/grid/level1/demos/grid-demo107/grid-demo107.module#GridDemo107PageModule' },
	{ path: 'grid-1-08' ,		loadChildren: './pages/grid/level1/demos/grid-demo108/grid-demo108.module#GridDemo108PageModule' },
	{ path: 'grid-1-09' ,		loadChildren: './pages/grid/level1/demos/grid-demo109/grid-demo109.module#GridDemo109PageModule' },
	{ path: 'grid-1-10' ,		loadChildren: './pages/grid/level1/demos/grid-demo110/grid-demo110.module#GridDemo110PageModule' },
	{ path: 'grid-1-11' ,		loadChildren: './pages/grid/level1/demos/grid-demo111/grid-demo111.module#GridDemo111PageModule' },
	{ path: 'grid-1-12' ,		loadChildren: './pages/grid/level1/demos/grid-demo112/grid-demo112.module#GridDemo112PageModule' },
	{ path: 'grid-1-13' ,		loadChildren: './pages/grid/level1/demos/grid-demo113/grid-demo113.module#GridDemo113PageModule' },
	{ path: 'grid-1-14' ,		loadChildren: './pages/grid/level1/demos/grid-demo114/grid-demo114.module#GridDemo114PageModule' },
	{ path: 'grid-1-15' ,		loadChildren: './pages/grid/level1/demos/grid-demo115/grid-demo115.module#GridDemo115PageModule' },
	{ path: 'grid-1-16' ,		loadChildren: './pages/grid/level1/demos/grid-demo116/grid-demo116.module#GridDemo116PageModule' },
	{ path: 'grid-1-17' ,		loadChildren: './pages/grid/level1/demos/grid-demo117/grid-demo117.module#GridDemo117PageModule' },
	{ path: 'grid-1-18' ,		loadChildren: './pages/grid/level1/demos/grid-demo118/grid-demo118.module#GridDemo118PageModule' },
	{ path: 'grid-1-19' ,		loadChildren: './pages/grid/level1/demos/grid-demo119/grid-demo119.module#GridDemo119PageModule' },
	{ path: 'grid-1-20' ,		loadChildren: './pages/grid/level1/demos/grid-demo120/grid-demo120.module#GridDemo120PageModule' },
	{ path: 'grid-1-21' ,		loadChildren: './pages/grid/level1/demos/grid-demo121/grid-demo121.module#GridDemo121PageModule' },
	{ path: 'grid-1-22' ,		loadChildren: './pages/grid/level1/demos/grid-demo122/grid-demo122.module#GridDemo122PageModule' },
	{ path: 'grid-1-23' ,		loadChildren: './pages/grid/level1/demos/grid-demo123/grid-demo123.module#GridDemo123PageModule' },
	{ path: 'grid-1-24' ,		loadChildren: './pages/grid/level1/demos/grid-demo124/grid-demo124.module#GridDemo124PageModule' },
	{ path: 'grid-1-25' ,		loadChildren: './pages/grid/level1/demos/grid-demo125/grid-demo125.module#GridDemo125PageModule' },
	{ path: 'grid-1-26' ,		loadChildren: './pages/grid/level1/demos/grid-demo126/grid-demo126.module#GridDemo126PageModule' },
	{ path: 'grid-1-27' ,		loadChildren: './pages/grid/level1/demos/grid-demo127/grid-demo127.module#GridDemo127PageModule' },
	{ path: 'grid-1-28' ,		loadChildren: './pages/grid/level1/demos/grid-demo128/grid-demo128.module#GridDemo128PageModule' },
	{ path: 'grid-1-29' ,		loadChildren: './pages/grid/level1/demos/grid-demo129/grid-demo129.module#GridDemo129PageModule' },
	{ path: 'grid-1-30' ,		loadChildren: './pages/grid/level1/demos/grid-demo130/grid-demo130.module#GridDemo130PageModule' },
	{ path: 'grid-1-31' ,		loadChildren: './pages/grid/level1/demos/grid-demo131/grid-demo131.module#GridDemo131PageModule' },
	{ path: 'grid-1-32' ,		loadChildren: './pages/grid/level1/demos/grid-demo132/grid-demo132.module#GridDemo132PageModule' },
	{ path: 'grid-1-33' ,		loadChildren: './pages/grid/level1/demos/grid-demo133/grid-demo133.module#GridDemo133PageModule' },
	{ path: 'grid-1-34' ,		loadChildren: './pages/grid/level1/demos/grid-demo134/grid-demo134.module#GridDemo134PageModule' },
	{ path: 'grid-1-35' ,		loadChildren: './pages/grid/level1/demos/grid-demo135/grid-demo135.module#GridDemo135PageModule' },
	{ path: 'grid-1-36' ,		loadChildren: './pages/grid/level1/demos/grid-demo136/grid-demo136.module#GridDemo136PageModule' },
	{ path: 'grid-1-37' ,		loadChildren: './pages/grid/level1/demos/grid-demo137/grid-demo137.module#GridDemo137PageModule' },

	{ path: 'grid-2' ,			loadChildren: './pages/grid/level2/css03-grid.module#CSS03Grid2PageModule' },
	{ path: 'grid-2-01' ,		loadChildren: './pages/grid/level2/demos/grid-demo201/grid-demo201.module#GridDemo201PageModule' },
	{ path: 'grid-2-02' ,		loadChildren: './pages/grid/level2/demos/grid-demo202/grid-demo202.module#GridDemo202PageModule' },
	{ path: 'grid-2-03' ,		loadChildren: './pages/grid/level2/demos/grid-demo203/grid-demo203.module#GridDemo203PageModule' },
	{ path: 'grid-2-04' ,		loadChildren: './pages/grid/level2/demos/grid-demo204/grid-demo204.module#GridDemo204PageModule' },
	{ path: 'grid-2-05' ,		loadChildren: './pages/grid/level2/demos/grid-demo205/grid-demo205.module#GridDemo205PageModule' },
	{ path: 'grid-2-06' ,		loadChildren: './pages/grid/level2/demos/grid-demo206/grid-demo206.module#GridDemo206PageModule' },
	{ path: 'grid-2-07' ,		loadChildren: './pages/grid/level2/demos/grid-demo207/grid-demo207.module#GridDemo207PageModule' },
	{ path: 'grid-2-08' ,		loadChildren: './pages/grid/level2/demos/grid-demo208/grid-demo208.module#GridDemo208PageModule' },
	{ path: 'grid-2-09' ,		loadChildren: './pages/grid/level2/demos/grid-demo209/grid-demo209.module#GridDemo209PageModule' },

	{ path: 'web-1',			loadChildren: './pages/webdesign/level1/web-design101/web-design101.module#WebDesign101PageModule' },
	{ path: 'web-1-01',			loadChildren: './pages/webdesign/level1/web-design101/web-design101.module#WebDesign101PageModule' },
	{ path: 'web-1-02',			loadChildren: './pages/webdesign/level1/web-design102/web-design102.module#WebDesign102PageModule' },
	{ path: 'web-1-03',			loadChildren: './pages/webdesign/level1/web-design103/web-design103.module#WebDesign103PageModule' },
	{ path: 'web-1-04',			loadChildren: './pages/webdesign/level1/web-design104/web-design104.module#WebDesign104PageModule' },
	{ path: 'web-1-05',			loadChildren: './pages/webdesign/level1/web-design105/web-design105.module#WebDesign105PageModule' },

	{ path: 'fab-1',			loadChildren: './pages/fab/fabmenu101/fabmenu101.module#FABMenu101PageModule' },
	{ path: 'fab-1-01', 		loadChildren: './pages/fab/fabmenu101/fabmenu101.module#FABMenu101PageModule' },
	{ path: 'fab-1-02', 		loadChildren: './pages/fab/fabmenu102/fabmenu102.module#FABMenu102PageModule' },
	{ path: 'fab-1-03', 		loadChildren: './pages/fab/fabmenu103/fabmenu103.module#FABMenu103PageModule' },
	{ path: 'fab-1-04', 		loadChildren: './pages/fab/fabmenu104/fabmenu104.module#FABMenu104PageModule' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
