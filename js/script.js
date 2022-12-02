document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');
	const allSections = document.querySelectorAll('.section');

	window.onscroll = () => {
		allSections.forEach((sec) => {
			const top = Math.floor(window.scrollY);
			const id = sec.getAttribute('id');
			const offset = sec.offsetTop - 84;
			const height = sec.offsetHeight;
			const totalScr =
				document.documentElement.scrollHeight - window.innerHeight;
			if (top >= offset && top < offset + height) {
				allNavItems.forEach((link) => {
					link.classList.remove('active');
					if (top + 5 > totalScr) {
						document
							.querySelector('.nav-link[href*=contact]')
							.classList.add('active');
					} else {
						document
							.querySelector('.nav-link[href*=' + id + ']')
							.classList.add('active');
					}
				});
			}
		});
	};

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
});
