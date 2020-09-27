import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	private splitPaneIsVisible = true;

	public appMenu = [
		{ name: 'Home', url: '/home', icon: 'home' },
		{
			name: 'Learning', url: '/learn-html', icon: '', level: 1,
			items: [
				{ name: 'HTML', url: '/learn-html', icon: '', level: 2 },
				{ name: 'CSS', url: '/learn-css', icon: '', level: 2 },
				{ name: 'JavaScript', url: '/learn-js', icon: '', level: 2 },
				{ name: 'Web', url: '/learn-web', icon: '', level: 2 },
				{ name: 'Ionic', url: '/learn-ionic', icon: '', level: 2 },
			]
		},

		{
			name: 'FAB', url: '/fab-1', icon: 'add', level: 1,
			items: [
				{ name: '1.01', url: '/fab-1-01', icon: 'add', level: 2 },
				{ name: '1.02', url: '/fab-1-02', icon: 'add', level: 2 },
				{ name: '1.03', url: '/fab-1-03', icon: 'add', level: 2 },
				{ name: '1.04', url: '/fab-1-04', icon: 'add', level: 2 },
			]
		},

		{
			name: 'HTML Level 1', url: '/html-1', icon: '', level: 1,
			items: [
				{ name: '1.01', url: '/html-1-01', icon: '', level: 2 },
				{ name: '1.02', url: '/html-1-02', icon: '', level: 2 },
				{ name: '1.03', url: '/html-1-03', icon: '', level: 2 },
				{ name: '1.04', url: '/html-1-04', icon: '', level: 2 },
				{ name: '1.05', url: '/html-1-05', icon: '', level: 2 },
			]
		},
		{
			name: 'HTML Level 2', url: '/html-2', icon: '', level: 1,
			items: [
				{ name: '2.01', url: '/html-2-01', icon: '', level: 2 },
				{ name: '2.02', url: '/html-2-02', icon: '', level: 2 },
				{ name: '2.03', url: '/html-2-03', icon: '', level: 2 },
				{ name: '2.04', url: '/html-2-04', icon: '', level: 2 },
				{ name: '2.05', url: '/html-2-05', icon: '', level: 2 },
			]
		},


		{
			name: 'CSS Level 1', url: '/css-1', icon: '', level: 1,
			items: [
				{ name: '1.01', url: '/css-1-01', icon: '', level: 2 },
				{ name: '1.02', url: '/css-1-02', icon: '', level: 2 },
				{ name: '1.03', url: '/css-1-03', icon: '', level: 2 },
				{ name: '1.04', url: '/css-1-04', icon: '', level: 2 },
				{ name: '1.05', url: '/css-1-05', icon: '', level: 2 },
			]
		},
		{
			name: 'CSS Level 2', url: '/css-2', icon: '', level: 1,
			items: [
				{ name: '2.01', url: '/css-2-01', icon: '', level: 2 },
				{ name: '2.02', url: '/css-2-02', icon: '', level: 2 },
				{ name: '2.03', url: '/css-2-03', icon: '', level: 2 },
				{ name: '2.04', url: '/css-2-04', icon: '', level: 2 },
				{ name: '2.05', url: '/css-2-05', icon: '', level: 2 },
			]
		},

		{ name: 'Table', url: '/table', icon: '', level: 2 },

		{
			name: 'Grid Layouts', url: '/grid-layouts', icon: 'list', level: 1,
			items: [
				{ name: '1.01', url: '/grid-layout-01', icon: '', level: 2 }
			]
		},

		{
			name: 'Grid Level 1', url: '/grid-1', icon: 'list', level: 1,
			items: [
				{ name: '1.01', url: '/grid-1-01', icon: '', level: 2 },
				{ name: '1.02', url: '/grid-1-02', icon: '', level: 2 },
				{ name: '1.03', url: '/grid-1-03', icon: '', level: 2 },
				{ name: '1.04', url: '/grid-1-04', icon: '', level: 2 },
				{ name: '1.05', url: '/grid-1-05', icon: '', level: 2 },
				{ name: '1.06', url: '/grid-1-06', icon: '', level: 2 },
				{ name: '1.07', url: '/grid-1-07', icon: '', level: 2 },
				{ name: '1.08', url: '/grid-1-08', icon: '', level: 2 },
				{ name: '1.09', url: '/grid-1-09', icon: '', level: 2 },
				{ name: '1.10', url: '/grid-1-10', icon: '', level: 2 },
				{ name: '1.11', url: '/grid-1-11', icon: '', level: 2 },
				{ name: '1.12', url: '/grid-1-12', icon: '', level: 2 },
				{ name: '1.13', url: '/grid-1-13', icon: '', level: 2 },
				{ name: '1.14', url: '/grid-1-14', icon: '', level: 2 },
				{ name: '1.15', url: '/grid-1-15', icon: '', level: 2 },
				{ name: '1.16', url: '/grid-1-16', icon: '', level: 2 },
				{ name: '1.17', url: '/grid-1-17', icon: '', level: 2 },
				{ name: '1.18', url: '/grid-1-18', icon: '', level: 2 },
				{ name: '1.19', url: '/grid-1-19', icon: '', level: 2 },
				{ name: '1.20', url: '/grid-1-20', icon: '', level: 2 },
				{ name: '1.21', url: '/grid-1-21', icon: '', level: 2 },
				{ name: '1.22', url: '/grid-1-22', icon: '', level: 2 },
				{ name: '1.23', url: '/grid-1-23', icon: '', level: 2 },
				{ name: '1.24', url: '/grid-1-24', icon: '', level: 2 },
				{ name: '1.25', url: '/grid-1-25', icon: '', level: 2 },
				{ name: '1.26', url: '/grid-1-26', icon: '', level: 2 },
				{ name: '1.27', url: '/grid-1-27', icon: '', level: 2 },
				{ name: '1.28', url: '/grid-1-28', icon: '', level: 2 }
			]
		},
		{ name: 'Grid Level 2', url: '/grid-2', icon: 'list', level: 1 },

		{
			name: 'Web Design', url: '/web-1', icon: 'list', level: 1,
			items: [
				{ name: '1.01', url: '/web-1-01', icon: 'list', level: 2 },
				{ name: '1.02', url: '/web-1-02', icon: 'list', level: 2 },
				{ name: '1.03', url: '/web-1-03', icon: 'list', level: 2 },
				{ name: '1.04', url: '/web-1-04', icon: 'list', level: 2 },
				{ name: '1.05', url: '/web-1-05', icon: 'list', level: 2 }
			]
		}

	];

	PREFIX = 'AppComponent';

	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line)
	}

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar,
		private menu: MenuController
	) {
		this.log('constructor');

		this.initializeApp();
	}

	initializeApp() {
		this.log('initializeApp');

		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	showSplitPane() {
		this.log('consshowSplitPanetructor');

		return this.splitPaneIsVisible;
	}

	toggleSplitPane() {
		this.log('toggleSplitPane');

		this.splitPaneIsVisible = !this.splitPaneIsVisible;
	}

	onClick(ev: any) {
		this.log('onClick', 'event=' + ev);
	}

	openFirst() {
		this.menu.enable(true, 'first');
		this.menu.open('first');
	}

	openEnd() {
		this.menu.open('end');
	}

	openCustom() {
		this.menu.enable(true, 'custom');
		this.menu.open('custom');
	}

	changeColors() {
		const pages = document.querySelectorAll('page');

		[].forEach.call(pages, function (page) {
			page.style.color = 'red';
		});
	}
}
