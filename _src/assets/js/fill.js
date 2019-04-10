'use strict';

//nombre y puesto

const nameInput = document.querySelector('#name');
const namePreview = document.querySelector('.preview--h2');

const jobInput = document.querySelector('#job');
const jobPreview = document.querySelector('.preview--h3');

function fillName() {

    if (nameInput.value === '') {
        namePreview.innerHTML = 'Nombre Apellido';
    } else {
        namePreview.innerHTML = nameInput.value;
    }
}


nameInput.addEventListener('keyup', fillName);

function fillJob() {
    if (jobInput.value === '') {
        jobPreview.innerHTML = 'Front-end developer';
    } else {
        jobPreview.innerHTML = jobInput.value;
    }
}

jobInput.addEventListener('keyup', fillJob);
// iconos
// MAIL
const email = document.querySelector('.mail');
const inputEmail = document.querySelector('#email');
const emailIcon = document.querySelector('.sm-link-mail');
const valueEmail = inputEmail.value;

function showEmail() {
    if(inputEmail.value !== '') {
        email.classList.remove('hidden');
        emailIcon.href = 'mailto:' + valueEmail;   
    }
    else {
        email.classList.add('hidden');
    }   
};

inputEmail.addEventListener('keyup', showEmail);

//PHONE

const phone = document.querySelector('.telephone');
const inputPhone = document.querySelector('#phone');
const phoneIcon = document.querySelector('.sm-link-telephone');
const valuePhone = inputPhone.value;

function showPhone() {
    if(inputPhone.value !== '') {
        phone.classList.remove('hidden');
        phoneIcon.href = `tel:${valuePhone}`;
       
    }
    else {
        phone.classList.add('hidden');
    }    
};
inputPhone.addEventListener('keyup', showPhone);

//LINKEDIN
const linkedin = document.querySelector('.linkedin');
const inputLinkedin = document.querySelector('#linkedin');
const linkedinIcon = document.querySelector('.sm-link-linkedin');
const valuelinkedin = inputLinkedin.value;

function showLinkedin() {
    if(inputLinkedin.value !== '') {
        linkedin.classList.remove('hidden');
        document.querySelector('.sm-link-linkedin').href = 'https://www.linkedin.com/in/' + inputLinkedin.value;
    }
    else {
        linkedin.classList.add('hidden');
    }  
    
};

inputLinkedin.addEventListener('keyup', showLinkedin);

//GITHUB
const github = document.querySelector('.github');
const inputGithub = document.querySelector('#github');
const githubIcon = document.querySelector('.sm-link-github');
const valueGithub = inputGithub.value;

function showGithub() {
    if(inputGithub.value !== '') {
        github.classList.remove('hidden');
        document.querySelector('.sm-link-github').href = 'https://github.com/' + inputGithub.value;
    }
    else {
        github.classList.add('hidden');
    }  
    
};

inputGithub.addEventListener('keyup', showGithub);

