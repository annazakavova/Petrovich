// ПЕРЕКЛЮЧЕНИЕ ЦЕНЫ
const tabItems = Array.from(document.querySelectorAll('.unit--select'))
const contentItems = Array.from(document.querySelectorAll('.product_price_club_card'))
const contentItems2 = Array.from(document.querySelectorAll('.product_price_default'))

const clearActiveClass = (element, className = 'unit--active') => {
	element.find(item => item.classList.remove(`${className}`))
}

const setActiveClass = (element, index, className = 'unit--active') => {
	element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
	item.addEventListener('click', () => {

		if (item.classList.contains('unit--active')) return
		console.log(item)

		clearActiveClass(tabItems)
		clearActiveClass(contentItems)

		clearActiveClass(tabItems)
		clearActiveClass(contentItems2)

		setActiveClass(tabItems, index)
		setActiveClass(contentItems, index)

		setActiveClass(tabItems, index)
		setActiveClass(contentItems2, index)
	})
}

tabItems.forEach(checkoutTabs)

// ----------------------------------------------------------------------------------------------------------------------------------
// ЭЛЕМЕНТ "КОРЗИНА ПУСТА"

function toggleCartStatus() {

	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartEmptyBadge = document.querySelector('[data-cart-empty]'); 
	const orderForm = document.querySelector('#order-form');

	if (cartWrapper.children.length > 0) {
		console.log('yes');
		cartEmptyBadge.classList.add('none');
		orderForm.classList.remove('none');
	} else {
		console.log('no');
		cartEmptyBadge.classList.remove('none');
		orderForm.classList.add('none');
	}
}

// ----------------------------------------------------------------------------------------------------------------------------------
// СЧЕТЧИК
window.addEventListener('click', function (event) {

	let counter;

	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
		const counterWrapper = event.target.closest('.product__wrapper');

		counter = counterWrapper.querySelector('[data-counter]');
	}

	if (event.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText;

	}
	if (event.target.dataset.action === 'minus') {

		if ( parseInt(counter.innerText) > 1 ) {
			counter.innerText = --counter.innerText;

		} else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1 ) {

			console.log('in cart');
			event.target.closest('.cart-item').remove();

			toggleCartStatus();
		}
	}
});

// ------------------------------------------------------------------------------------------------------------------------------------
// ДОБАВЛЕНИЕ ТОВАРОВ В КОРЗИНУ
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {


	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('.product');

		const productInfo = {
			id: card.dataset.id,
			code: card.querySelector('.product_code'),
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.product_description').innerText,
			priceClab: card.querySelector('.goldPrice').innerText,
			priceDefault: card.querySelector('.retailPrice').innerText,
			desc: card.querySelector('.list--unit-desc').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};
		console.log(productInfo);

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
		} else {

			const cartItemHTML = `<div class="cart-item">
												<div class="products_page pg_0">
													<div class="product product_horizontal" data-id="${productInfo.id}">
														<span class="product_code">${productInfo.code}</span>
														<div class="product_photo">
															<a href="#" class="url--link product__link">
																<img class="product-img" src="${productInfo.imgSrc}">
															</a>
														</div>
														<div class="product_description">
															<a href="#" class="product__link">${productInfo.title}</a>
														</div>
														<div class="product_units">
															<div class="unit--wrapper">
																<div class="unit--select unit--active">
																	<p class="ng-binding">За м. кв.</p>
																</div>
																<div class="unit--select">
																	<p class="ng-binding">За упаковку</p>
																</div>
															</div>
														</div>
														<p class="product_price_club_card unit--active">
															<span class="product_price_club_card_text">По карте<br>клуба</span>
															<span class="${productInfo.priceClab}">375,71</span>
															<span class="rouble__i black__i">
																<svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px"
																	height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
																	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
																</svg>
															</span>
														</p>
														<p class="product_price_club_card">
															<span class="product_price_club_card_text">По карте<br>клуба</span>
															<span class="${productInfo.priceClab}">390</span>
															<span class="rouble__i black__i">
																<svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px"
																	height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
																	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
																</svg>
															</span>
														</p>
														<p class="product_price_default unit--active">
															<span class="${productInfo.priceDefault}">391,09</span>
															<span class="rouble__i black__i">
																<svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px"
																	height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
																	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
																</svg>
															</span>
														</p>
														<p class="product_price_default">
															<span class="${productInfo.priceDefault}">400</span>
															<span class="rouble__i black__i">
																<svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px"
																	height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
																	<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
																</svg>
															</span>
														</p>
														<div class="product_price_points">
															<p class="${productInfo.pricePoints}">Можно купить за 231,75 балла</p>
														</div>
														<div class="product__wrapper">
															<div class="product_count_wrapper">
																<div class="stepper">
																	<div class="product__count stepper-input" data-counter>${productInfo.counter}</div>
																	<span class="stepper-arrow up" data-action="plus"></span>
																	<span class="stepper-arrow down" data-action="minus"></span>
																</div>
															</div>
															<button data-cart class="busket-closeBtn" data-url="/cart/"
																data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
																<svg data-cart class="ic ic_cart">
																	<use data-cart xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
																</svg>
																<span data-cart class="ng-binding">В корзинe</span>
															</button>
														</div>
													</div>
												</div>
											</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		
		}

		card.querySelector('[data-counter]').innerText = '1';

		
		toggleCartStatus();
	}
});

// ----------------------------------------------------------------------------------------------------------------------------------
// ИЗМЕНЕНИЕ ЦЕНЫ ПРИ ДОБАВЛЕНИИ ТОВАРОВ
 function calcCartPrice() {
	 const cartItems = document.querySelectorAll('.cart-item');
	 console.log(cartItems);

	 cartItems.forEach(function (item) {
		 console.log(item);

		 const amountEl = item.querySelector('[data-counter]');
		 const priceEl = item.querySelector('.goldPrice');

		 const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
		 console.log(currentPrice);

	 })
 } 

// ---------------------------------------------------------------------------------------------------------------------------------
// 	КОРЗИНА 
// window.addEventListener('DOMContentLoaded', function () {
// 	let products = document.querySelectorAll('#products_section'),
// 		buttons = document.querySelectorAll('.busket-closeBtn'),
// 		openBtn = document.querySelector('.open-busket');

// 	СОЗДАНИЕ КОРЗИНЫ
// 	function createCart() {
// 		let cart = document.createElement('div'),
// 			field = document.createElement('div'),
// 			busketText = document.createElement('h2'),
// 			closeBtn = document.createElement('button');
// 			buyBtn = document.createElement('button')

// 		cart.classList.add('cart');
// 		field.classList.add('cart-field');
// 		busketText.classList.add('busket-title');
// 		closeBtn.classList.add('busket-close');
// 		buyBtn.classList.add('busket-buy')

// 		busketText.textContent = "В корзине:";
// 		closeBtn.textContent = "Закрыть";
// 		buyBtn.textContent = "Купить";

// 		document.body.appendChild(cart);
// 		cart.appendChild(busketText);
// 		cart.appendChild(field);
// 		cart.appendChild(closeBtn);
// 		cart.appendChild(buyBtn);

// 	}

// 	createCart();

// 	let field = document.querySelector('.cart-field'),
// 		cart = document.querySelector('.cart'),
// 		close = document.querySelector('.busket-close');

// 	function openCart() {
// 		cart.style.display = 'block';
// 	}
// 	function closeCart() {
// 		cart.style.display = 'none';
// 	}

// 	openBtn.addEventListener('click', openCart);
// 	close.addEventListener('click', closeCart);

// 	for (let i = 0; i < buttons.length; i++) {
// 		buttons[i].addEventListener('click', function () {
// 			let item = products[i].cloneNode(true),
// 				productStatus = item.querySelector('.product_status_tooltip_container');
// 				listUnit = item.querySelector('.list--unit-desc');
// 				productPricePoints = item.querySelector('.product_price_points');
			
			
			
// 			productStatus.remove();
// 			listUnit.remove();
// 			productPricePoints.remove();
// 			field.appendChild(item);
// 		});
// 	}
// });