const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.nav');
const img = document.querySelector('.image');

burgerItem.addEventListener('click', () => {
	burgerItem.classList.toggle('active');
	menu.classList.toggle('nav__active')
})

/*
document.querySelector('.burger').addEventListener('click', (evt) => {
	evt.preventDefault();
	document.body.classList.toggle('show-menu')
 })*/