export function onNavClick(element) {
    const source = element.target.getAttribute('data-source');

    navToggle(element.target);
    import('./../model/app.model').then(getNewsModule =>
        getNewsModule.getNews(source)
    );
}

function navToggle(element) {
    if (document.querySelector('.nav-item.active')) {
        document.querySelector('.nav-item.active').classList.remove('active');
    }
    element.classList.add('active');
}
