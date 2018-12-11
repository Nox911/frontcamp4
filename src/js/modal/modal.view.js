export function getModalContainerTemplate(message) {
    const modalContainerTemplate = document.createElement('div');
    modalContainerTemplate.setAttribute('class', 'modal-container');

    modalContainerTemplate.innerHTML = `
        <div class="modal">
            <h2>Sorry, something went wrong;(</h2>
            <p class="modal-description">${message}</p>
            <button class="modal-button">I understood</button>
        </div>`;

    return modalContainerTemplate;
}

export function getModalOverlayTemplate() {
    const modalOverlayTemplate = document.createElement('div');
    modalOverlayTemplate.setAttribute('class', 'modal-overlay');

    return modalOverlayTemplate;
}
