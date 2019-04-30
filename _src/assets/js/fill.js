'use strict';
const nameInput = document.querySelector('#name');
const namePreview = document.querySelector('.preview--h2');
const jobInput = document.querySelector('#job');
const jobPreview = document.querySelector('.preview--h3');

const email = document.querySelector('.mail');
const inputEmail = document.querySelector('#email');
const emailIcon = document.querySelector('.sm-link-mail');
const valueEmail = inputEmail.value;

const phone = document.querySelector('.telephone');
const inputPhone = document.querySelector('#phone');
const phoneIcon = document.querySelector('.sm-link-telephone');
const valuePhone = inputPhone.value;

const linkedin = document.querySelector('.linkedin');
const inputLinkedin = document.querySelector('#linkedin');
const linkedinIcon = document.querySelector('.sm-link-linkedin');
const valuelinkedin = inputLinkedin.value;

const github = document.querySelector('.github');
const inputGithub = document.querySelector('#github');
const githubIcon = document.querySelector('.sm-link-github');
const valueGithub = inputGithub.value;

const reset = document.querySelector('.preview__reset');
const field = document.querySelectorAll('.form_field');
const imageDefault = document.querySelector('.preview__card--image');
const iconsDefault = document.querySelectorAll('.sm');
const imgPreviewDefault = document.querySelector('.form__photo-preview');

const card = {
  name: 'Nombre Apellido',
  job: 'Front-end developer',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: defaultImg,
  palette: 1
};

const savedData = JSON.parse(localStorage.getItem('cardSaved'));

const cardData = {
  ...card,
  ...savedData
};

const saveData = (key, val) => {
  cardData[key] = val;
  localStorage.setItem('cardSaved', JSON.stringify(cardData));
  return cardData;
};

//nombre y puesto

const fillName = () => {
  if (nameInput.value === '') {
    namePreview.innerHTML = card.name;
  } else {
    namePreview.innerHTML = nameInput.value;
  }
  saveData(nameInput.name, nameInput.value);

};

const fillJob = () => {
  if (jobInput.value === '') {
    jobPreview.innerHTML = card.job;
  } else {
    jobPreview.innerHTML = jobInput.value;
  }
  saveData(jobInput.name, jobInput.value);
};

const showEmail = () => {
  cardData.email = inputEmail.value;
  if (cardData.email !== '') {
    email.classList.remove('hidden');
    emailIcon.href = 'mailto:' + valueEmail;
  } else {
    email.classList.add('hidden');
  }
  saveData(inputEmail.name, inputEmail.value);

};

const showPhone = () => {
  cardData.phone = inputPhone.value;
  if (cardData.phone !== '') {
    phone.classList.remove('hidden');
    phoneIcon.href = `tel:${valuePhone}`;
  } else {
    phone.classList.add('hidden');
  }
  saveData(inputPhone.name, inputPhone.value);
};

const showLinkedin = () => {
  cardData.linkedin = inputLinkedin.value;
  if (cardData.linkedin !== '') {
    linkedin.classList.remove('hidden');
    linkedinIcon.href = 'https://www.linkedin.com/in/' + cardData.linkedin;
  } else {
    linkedin.classList.add('hidden');
  }
  saveData(inputLinkedin.name, inputLinkedin.value);
};

const showGithub = () => {
  cardData.github = inputGithub.value;
  if (cardData.github !== '') {
    github.classList.remove('hidden');
    githubIcon.href = 'https://github.com/' + cardData.github;
  } else {
    github.classList.add('hidden');
  }
  saveData(inputGithub.name, inputGithub.value);
};

const setCardData = data => {
  if (data.name === 'Nombre Apellido') {
    namePreview.innerHTML = data.name;
  } else {
    nameInput.value = data.name;
    namePreview.innerHTML = data.name;
  }
  fillName();

  if (data.job === 'Front-end developer') {
    jobPreview.innerHTML = data.job;
  } else {
    jobInput.value = data.job;
    jobPreview.innerHTML = data.job;
  }
  fillJob();
  inputEmail.value = data.email;
  showEmail();
  inputPhone.value = data.phone;
  showPhone();
  inputLinkedin.value = data.linkedin;
  showLinkedin();
  inputGithub.value = data.github;
  showGithub();
  choosePalette(cardData.palette);
  imageDefault.style = `background-image: url(${cardData.photo})`;
  imgPreviewDefault.style = `background-image: url(${cardData.photo})`;
};



setCardData(cardData);

nameInput.addEventListener('keyup', fillName);
jobInput.addEventListener('keyup', fillJob);
inputEmail.addEventListener('keyup', showEmail);
inputPhone.addEventListener('keyup', showPhone);
inputLinkedin.addEventListener('keyup', showLinkedin);
inputGithub.addEventListener('keyup', showGithub);

//RESET

const hideIcons = () => {
  for (const icon of iconsDefault) {
    icon.classList.add('hidden');
  }
};

const backImage = () => {
  imageDefault.style.backgroundImage = `url(${card.photo})`;
};


const resetCard = (event) => {
  for (const item of field) {
    item.value = '';
    saveData(item.name, item.value);
  }
  choosePalette(card.palette);
  cardData.palette = '1';
  hideIcons();
  fillName();
  fillJob();
  changeColors('preview-blue');
  backImage();
  profilePreview.style.backgroundImage = '';

};

reset.addEventListener('click', resetCard);
