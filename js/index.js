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
		counter.innerText = --counter.innerText;
	}
});
// ------------------------------------------------------------------------------------------------------------------------------------
// ДОБАВЛЕНИЕ ТОВАРОВ В КОРЗИНУ
// const cart = document.querySelector('.cart');

// window.addEventListener('click', function (event) {

// 	const card = event.target.closest('card');

// 	if (event.target.hasAttribute('data-cart')) {

// 		const productInfo = {
// 			id: card.dataset.id,
// 			title: card.querySelector('.product_description').innerText,
// 			price: card.querySelector('.unit--active').innerText,
// 			counter: card.querySelector('[data-counter]').innerText,
// 		};

// 		console.log (productInfo);

// 		const cartItemHTML = `  <div id="products_section">
//                         <div class="products_page pg_0">
//                             <div class="product product_horizontal">                                
//                                 <span class="product_code">Код: 147268</span>
//                                 <div class="product_status_tooltip_container">
//                                     <span class="product_status">Наличие</span>
//                                 </div>                                
//                                 <div class="product_photo">
//                                     <a href="#" class="url--link product__link">
//                                         <img src="misc/df126-52f2-11e5-b9a9-00259036a192_220x220_1.jpg">
//                                     </a>                                    
//                                 </div>
//                                 <div class="product_description">
//                                     <a href="#" class="product__link">${productInfo.title}</a>
//                                 </div>
//                                 <div class="product_tags hidden-sm">
//                                     <p>Могут понадобиться:</p>
//                                     <a href="#" class="url--link">подложка,</a>
//                                     <a href="#" class="url--link">плинтус натуральный,</a>
//                                     <a href="#" class="url--link">рулетка,</a>
//                                     <a href="#" class="url--link">набор для укладки ламината,</a>
//                                     <a href="#" class="url--link">ножовка по ламинату,</a>
//                                     <a href="#" class="url--link">гель для стыков ламината Clic Protect.</a>
//                                 </div>
//                                 <div class="product_units">
//                                     <div class="unit--wrapper">
//                                         <div class="unit--select unit--active">
//                                             <p class="ng-binding">За м. кв.</p>
//                                         </div>
//                                         <div class="unit--select">
//                                             <p class="ng-binding">За упаковку</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <p class="product_price_club_card unit--active">
//                                     <span class="product_price_club_card_text">По карте<br>клуба</span>
//                                     <span class="goldPrice">375,71</span>
//                                     <span class="rouble__i black__i">
//                                         <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
//                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
//                                         </svg>
//                                      </span>
//                                 </p>
// 										  <p class="product_price_club_card">
//                                     <span class="product_price_club_card_text">По карте<br>клуба</span>
//                                     <span class="goldPrice">390</span>
//                                     <span class="rouble__i black__i">
//                                         <svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
//                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>
//                                         </svg>
//                                      </span>
//                                 </p>
//                                 <p class="product_price_default unit--active">
//                                     <span class="retailPrice">391,09</span>
//                                     <span class="rouble__i black__i">
//                                         <svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
//                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
//                                         </svg>
//                                      </span>
//                                 </p>
// 											<p class="product_price_default">
// 												<span class="retailPrice">400</span>
// 												<span class="rouble__i black__i">
// 													<svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px"
// 														viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">
// 														<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>
// 													</svg>
// 												</span>
// 											</p>
//                                 <div class="product_price_points">
//                                     <p class="ng-binding">Можно купить за 231,75 балла</p>
//                                 </div>
//                                 <div class="list--unit-padd"></div>
//                                 <div class="list--unit-desc">
//                                     <div class="unit--info">
//                                         <div class="unit--desc-i"></div>
//                                         <div class="unit--desc-t">
//                                             <p>
//                                                 <span class="ng-binding">Продается упаковками:</span>
//                                                 <span class="unit--infoInn">1 упак. = 2.47 м. кв. </span>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div class="product__wrapper">
//                                     <div class="product_count_wrapper">
//                                         <div class="stepper">
//                                             <div class="product__count stepper-input" data-counter>1</div>
//                                             <span class="stepper-arrow up" data-action="plus"></span>
//                                             <span class="stepper-arrow down" data-action="minus"></span>                                            
//                                         </div>
//                                     </div>
//                                     <button data-cart class="btn btn_cart busket-closeBtn" data-url="/cart/" data-product-id="9bf0afd7-5190-11e5-b9a9-00259036a192">
//                                         <svg data-cart class="ic ic_cart">
//                                            <use data-cart xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
//                                         </svg>
//                                         <span data-cart class="ng-binding">В корзину</span>
// 												</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`;

// 		cartItemHTML.insertAdjacentHTML('beforeend', cartItemHTML)
// 	};
// });



// calculations = (count) => {
// 	return calculation + ` * ${count} = ` + (+count) * (+calculation);
// }

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