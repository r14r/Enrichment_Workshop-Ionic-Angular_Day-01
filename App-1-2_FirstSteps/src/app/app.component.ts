import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const ICON_STEP = '';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'Demo', url: '/demo', icon: ICON_STEP },
		{ title: 'Step  1', url: '/step01_start', icon: ICON_STEP },
		{ title: 'Step  2', url: '/step02_content', icon: ICON_STEP },
		{ title: 'Step  3', url: '/step03_centering', icon: ICON_STEP },
		{ title: 'Step  4', url: '/step04_font-family', icon: ICON_STEP },
		{ title: 'Step  5', url: '/step05_spacing', icon: ICON_STEP },
		{ title: 'Step  6', url: '/step06_color-contrast', icon: ICON_STEP },
		{ title: 'Step  7', url: '/step07_balance', icon: ICON_STEP },
		{ title: 'Step  8', url: '/step08_primary-color', icon: ICON_STEP },
		{ title: 'Step  9', url: '/step09_secondary-color', icon: ICON_STEP },
		{ title: 'Step 10', url: '/step10_custom-font', icon: ICON_STEP },
		{ title: 'Step 11', url: '/step11_images', icon: ICON_STEP },
		{ title: 'Step 12', url: '/step12_share', icon: ICON_STEP }
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}
}
