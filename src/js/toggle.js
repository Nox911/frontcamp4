export function navToggle(element) {
    document.querySelector('.nav-item.active').classList.remove('active');
    element.classList.add('active');
}
