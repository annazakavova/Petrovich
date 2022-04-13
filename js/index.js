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
