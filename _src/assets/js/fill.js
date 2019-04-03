'use strict';

//nombre y puesto

const nameInput = document.querySelector('#name');
const namePreview = document.querySelector('.preview--h2');

function fillName() {
    event.preventDefault();
    if (nameInput === '') {
        namePreview.innerHTML = namePreview.innerHTML;
    } else {
        namePreview.innerHTML = nameInput.value;
    }
}

nameInput.addEventListener('keyup', fillName);