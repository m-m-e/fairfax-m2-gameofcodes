

// function changeColor() {
//     previewCard.classList.add('preview-red');
//     previewCard.classList.remove('preview-grey', 'preview-default');
// }


// radioRed.addEventListener('click', changeColor);

// // grey

// const radioGrey = document.querySelector('#grey_palette');




// radioGrey.addEventListener('click', changeColor2);

// //default

// const radioDefault = document.querySelector('#blue_palette');


// function changeColor3() {
//     previewCard.classList.remove('preview-red', 'preview-grey');
//     previewCard.classList.add('preview-default');
// }

'use strict';

const radioBlue = document.querySelector('#blue_palette');
const radioRed = document.querySelector('#red_palette');
const radioGrey = document.querySelector('#grey_palette');

const previewCard = document.querySelector('.preview__card');

function changeColors(classtoadd) {
    console.log(classtoadd);
    previewCard.classList.remove('preview-grey','preview-red', 'preview-blue');
    previewCard.classList.add(classtoadd);
}

function choosePalette(value){
    if (value === 1) {
        changeColors('preview-blue');
        radioBlue.checked = 'checked';
    } else if (value === 2) {
        changeColors('preview-red');
        radioRed.checked = 'checked';
    } else {
        changeColors('preview-grey');
        radioGrey.checked = 'checked';
    }
}

const getPalette = event => {
    const name = event.currentTarget.name;
    const value = parseInt(event.currentTarget.value);
    console.log(name, value);
    choosePalette(value);
    saveData(name, value);
};

// function checkRadio(value) {}

radioBlue.addEventListener('click', getPalette);
radioRed.addEventListener('click', getPalette);
radioGrey.addEventListener('click', getPalette);