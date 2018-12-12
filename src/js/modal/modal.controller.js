import './../../css/modal.scss';
import {
    getModalContainerTemplate,
    getModalOverlayTemplate,
} from './modal.view';

let modalContainer;
let modalOverlay;
let modalMessage;
let confirmButton;
const body = document.getElementsByTagName('body')[0];

export function renderModal(message) {
    if (modalContainer && modalOverlay) {
        updateModalMessage(message);
        toggleModal();
    } else {
        body.appendChild(getModalOverlayTemplate());
        body.appendChild(getModalContainerTemplate(message));
        modalOverlay = document.getElementById('modal-overlay');
        modalContainer = document.getElementById('modal-container');
        modalMessage = document.getElementById('modal-message');
        confirmButton = document.getElementById('modal-button');
        confirmButton.addEventListener('click', toggleModal);
    }
}

function toggleModal() {
    modalContainer.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
}

function updateModalMessage(message) {
    modalMessage.innerHtml = `${message}`;
}
