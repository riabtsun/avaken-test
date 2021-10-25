window.addEventListener('DOMContentLoaded', () => {
	// Sticky header

	const header = document.querySelector('.header-wrapper'),
		headerMenuList = document.querySelector('.header-menu__list'),
		headerLink = document.querySelector('.header-menu__link'),
		logo = document.querySelector('.header-logo'),
		openBtn = document.querySelector('.header-btn__icon-open'),
		closeBtn = document.querySelector('.header-btn__icon-close'),
		headerHeight = header.offsetHeight;

	window.addEventListener('scroll', () => {
		if (window.scrollY > headerHeight) {
			header.classList.add('active');
			headerLink.classList.add('active');
			logo.classList.add('active');
			closeBtn.classList.add('active');
			openBtn.classList.add('active');
			headerMenuList.classList.add('active');
		} else {
			header.classList.remove('active');
			headerLink.classList.remove('active');
			logo.classList.remove('active');
			closeBtn.classList.remove('active');
			openBtn.classList.remove('active');
			headerMenuList.classList.remove('active');
		}
	});

	// Burger menu

	const menuBtn = document.querySelector('[data-btn]'),
		headerMenu = document.querySelector('[data-menu]');

	menuBtn.addEventListener('click', () => {
		// const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
		// menuBtn.setAttribute('aria-expanded', !expanded);

		menuBtn.classList.toggle('header-menu__open');
		document.body.classList.toggle('header-menu__background-show');
		headerMenu.classList.toggle('header-menu__open');
	});

	// Swiper slider

	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,

		loop: true,

		navigation: {
			prevEl: '.button-prev',
			nextEl: '.button-next',
		},
	});

	// Render cards

	class ItemCard {
	constructor(title, subtitle, info, link, parentSelector, ...classes) {
		this.title = title;
		this.subtitle = subtitle;
		this.info = info;
		this.link = link;
		this.classes = classes;
		this.parent = document.querySelector(parentSelector);
	}

	render() {
		const element = document.createElement('div');

		if (this.classes.length === 0) {
			this.element = 'services-card__item';
			element.classList.add(this.element);
		} else {
			this.classes.forEach(() => {
				element.classList.add(this.classes);
			});
		}

		element.innerHTML = `
						<p class="services-card__title">${this.title}</p>
						<h3 class="services-card__subtitle">${this.subtitle}</h3>
						<p class="services-card__info">${this.info}</p>
						<a href="${this.link}"class="services-card__plus"></a>
	`;
		this.parent.append(element);
	}
}

new ItemCard(
	'Experiences',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.',
	'Molestie facilisis sit nisl imperdiet nunc, enim sed a. Mi ac ut arcu sollicitudin pellentesque.',
	'#',
	'.services-card',
	'services-card__item'
).render();

new ItemCard(
	'Campaigns',
	'Cras sit cras eget interdum. Suspendisse nibh mattis non fames sit.',
	'Erat in ut nunc, morbi dictumst et lectus ligula enim. Porta porta nibh purus ac sit morbi et.',
	'#',
	'.services-card',
	'services-card__item'
).render();

new ItemCard(
	'Studio',
	'Mattis amet tincidunt sem morbi lacus blandit donec arcu dolor.',
	'Bibendum molestie tellus maecenas eget. Risus aenean vestibulum id porttitor mattis.',
	'#',
	'.services-card',
	'services-card__item'
).render();
});

