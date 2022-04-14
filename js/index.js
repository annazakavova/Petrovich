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

//	КОРЗИНА 
window.addEventListener('DOMContentLoaded', function () {
	let products = document.querySelectorAll('.product'),
		buttons = document.querySelectorAll('.busket-closeBtn'),
		openBtn = document.querySelector('.open-busket');

	// СОЗДАНИЕ КОРЗИНЫ
	function createCart() {
		let cart = document.createElement('div'),
			field = document.createElement('div'),
			busketText = document.createElement('h2'),
			closeBtn = document.createElement('button');

		cart.classList.add('cart');
		field.classList.add('cart-field');
		busketText.classList.add('busket-title');
		closeBtn.classList.add('busket-close');

		busketText.textContent = "В корзине:";
		closeBtn.textContent = "Закрыть";

		document.body.appendChild(cart);
		cart.appendChild(busketText);
		cart.appendChild(field);
		cart.appendChild(closeBtn);
	
	}

	createCart();

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

	function openCart() {
		cart.style.display = 'block';
	}
	function closeCart() {
		cart.style.display = 'none';
	}

	openBtn.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

});

window.addEventListener('click', function (event) {

	if (event.target.hasAttribute('data-cart')) {

		const card = event.target.closest('#products_section');

		const productInfo = {
			id: card.dataset.id,
			title: card.querySelector('.product_description').innerText,
			price: card.querySelector('.unit--active').innerText,
			counter: card.querySelector('[data-counter]').innerText,
		};

		console.log(productInfo);
	}
});