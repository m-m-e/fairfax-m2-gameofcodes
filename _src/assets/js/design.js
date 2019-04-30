'use strict';

const radioBlue = document.querySelector('#blue_palette');
const radioRed = document.querySelector('#red_palette');
const radioGrey = document.querySelector('#grey_palette');

const previewCard = document.querySelector('.preview__card');

function changeColors(classtoadd) {
  previewCard.classList.remove('preview-grey', 'preview-red', 'preview-blue');
  previewCard.classList.add(classtoadd);
}

const choosePalette = value => {
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
};

const getPalette = event => {
  const name = event.currentTarget.name;
  const value = parseInt(event.currentTarget.value);
  choosePalette(value);
  saveData(name, value);
};

radioBlue.addEventListener('click', getPalette);
radioRed.addEventListener('click', getPalette);
radioGrey.addEventListener('click', getPalette);
