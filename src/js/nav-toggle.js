export function navToggle(element) {
    if (document.querySelector('.nav-item.active')) {
        document.querySelector('.nav-item.active').classList.remove('active');
    }
    element.classList.add('active');
}
