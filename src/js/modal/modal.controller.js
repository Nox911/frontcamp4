import './../../css/modal.scss';
import {
    getModalContainerTemplate,
    getModalOverlayTemplate,
} from './modal.view';

export function renderModal(message) {
    const body = document.getElementsByTagName('body')[0];
    body.appendChild(getModalOverlayTemplate());
    body.appendChild(getModalContainerTemplate(message));
}
