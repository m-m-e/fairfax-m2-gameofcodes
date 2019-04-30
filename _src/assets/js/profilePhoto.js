'use strict';

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');


const writeImage = () => {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  saveData(fileField.name, fr.result);
};

const getImage = (e) => {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};

const fakeFileClick = () => {
  fileField.click();
};


uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);
