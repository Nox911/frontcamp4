const modalOverlay = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');
const modalText = document.getElementById('modal-description');
const confirmButton = document.getElementById('modal-button');

confirmButton.addEventListener('click', toggleModal);

export function openModal(err) {
    toggleModal();
    modalText.innerHTML = `Sorry, ${err.message}`;
}

function toggleModal() {
    modalContainer.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
}
