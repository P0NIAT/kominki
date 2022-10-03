
const arrowIcon = document.querySelector('.fas');
const buttonArrow = document.querySelector('button');
const item1 = document.querySelector('.item1');

buttonArrow.addEventListener('click', change);

function change() {
	item1.classList.toggle('show')

	if (item1.classList.contains('show')) {
		arrowIcon.style.transform = 'rotate(180deg)'
	} else {
		arrowIcon.style.transform = 'rotate(0)'
	}
}