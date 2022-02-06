const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
	burger.classList.toggle('active');
	burger.classList.remove('no-animation');
})