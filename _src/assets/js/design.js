

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
    console.log(classtoadd)
    previewCard.classList.remove('preview-grey','preview-red', 'preview-blue');
    previewCard.classList.add(classtoadd);
}


radioBlue.addEventListener('click', function(){changeColors('preview-blue')});
radioRed.addEventListener('click', function(){changeColors('preview-red')});
radioGrey.addEventListener('click', function(){changeColors('preview-grey')});


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