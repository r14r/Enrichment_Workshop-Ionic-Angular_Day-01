import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
	selector: 'app-magazine-layout',
	templateUrl: './magazine-layout.page.html',
	styleUrls: ['./magazine-layout.page.scss'],
})
export class MagazineLayoutPage implements OnInit {

	PREFIX = 'MagazineLayoutPage';
	log(func, line = '') {
		console.log(this.PREFIX + '::' + func + '|' + line);
	}

	constructor(private renderer: Renderer2, private _element: ElementRef) {
		this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit', 'show all links');

		// const prevs = document.querySelectorAll('.js-prev');
		// const prevs = this._element.nativeElement.querySelectorAll('.js-prev');
		const prevs = document.querySelectorAll('.js-prev');
		const nexts = document.querySelectorAll('a.next.js-next');

		/*
		prevs.forEach((prev) => {
			console.log('prev:', prev);

			prev.addEventListener('click', (event) => {
				event.preventDefault();
				console.log('target=' + event.target);
				this.onClickPrev();
			}, false);
		});

		nexts.forEach((next) => {
			console.log('next:', next);

			next.addEventListener('click', (event) => {
				event.preventDefault();
				console.log('target=' + event.target);
				this.onClickNext();
			}, false);
		});
		*/

		[].forEach.call(prevs, function (prev) {
			console.log(prev, typeof (prev));

			prev.addEventListener('click', (event) => {
				event.preventDefault();
				console.log('prev: target=' + event.target);
				// this.onClickPrev();
			}, false);
		});

		[].forEach.call(nexts, function (next) {
			console.log(next, typeof (next));

			next.addEventListener('click', (event) => {
				event.preventDefault();
				console.log('next: target=' + event.target);
				// this.onClickNext();
			}, false);
		});
	}

	toggleClass(event: any) {
		this.log('toggleClass');

		const classname = 'active';

		if (event.target.classList.contains(classname)) {
			this.renderer.removeClass(event.target, classname);
		} else {
			this.renderer.addClass(event.target, classname);
		}
	}

	onClickNext() {
		this.log('onClickNext');

		const current = document.querySelector('.page.active');
		/*
		const findNext = current.next('.page');

		$(current).removeClass('active');
		setTimeout(function () {
			$(findNext).addClass('active');
		}, 200);
		*/
	}

	onClickPrev() {
		this.log('onClickPrev');

		const current = document.querySelector('.page.active');
		/*
		const findPrev = $(current).prev('.page');
		$(current).removeClass('active');

		setTimeout(function () {
			$(findPrev).addClass('active');
		}, 200);
		*/
	}

	onClickBackTo1() {
		const current = document.querySelector('.page.active');
		/*
		$(current).removeClass('active');

		setTimeout(function () {
			$('.page-cover').addClass('active');
		}, 400);
		*/
	}
}
