// collapsable design
const design = document.querySelector('.design__container__form');
const designTitle = document.querySelector('.design__container__title');

function designDropDown() {
    if(design.classList.contains('hidden')) {
        design.classList.remove('hidden')
    } else {
    design.classList.add('hidden');
    }
}

designTitle.addEventListener('click', designDropDown);

// collapsable rellena

const fillTitle = document.querySelector('.fill__container-title');
const fill = document.querySelector('.fill__form');

function fillDropDown() {
    if(fill.classList.contains('hidden')) {
        fill.classList.remove('hidden')
    } else {
    fill.classList.add('hidden');
    }
}

fillTitle.addEventListener('click', fillDropDown);