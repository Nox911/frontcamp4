function activeClassToggle(element) {
	if (!element.classList.contains('active')) {
		let navItems = document.getElementsByClassName('nav-item');
		for (let item of navItems) {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		}
		element.classList.add('active');
	}
}
