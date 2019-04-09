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
const value = inputEmail.value;

function addEmail() {
    email.classList.remove('hidden');
    emailIcon.href = `mailto:${value}`;
};

function showEmail() {
    if(inputEmail.value !== '') {
        email.classList.remove('hidden');
       
    }
    else {
        email.classList.add('hidden');
    }  
    
};
inputEmail.addEventListener('keyup', addEmail);
inputEmail.addEventListener('keyup', showEmail);

//PHONE

const phone = document.querySelector('.telephone');
const inputPhone = document.querySelector('#phone');
const phoneIcon = document.querySelector('.sm-link-telephone');
const valuePhone = inputPhone.value;


function addPhone() {
    phone.classList.remove('hidden');
    phoneIcon.href = `tel:${valuePhone}`;
}


function showPhone() {
    if(inputPhone.value !== '') {
        phone.classList.remove('hidden');
    }
    else {
        phone.classList.add('hidden');
    }  
    
};
inputPhone.addEventListener('keyup', addPhone);
inputPhone.addEventListener('keyup', showPhone);

//LINKEDIN
const linkedin = document.querySelector('.linkedin');
const inputLinkedin = document.querySelector('#linkedin');
const linkedinIcon = document.querySelector('.sm-link-linkedin');
const valuelinkedin = inputLinkedin.value;
function addLinkedin() {
    linkedin.classList.remove('hidden');
    linkedinIcon.href = `https://www.linkedin.com/in/${valuelinkedin}`;
};

function showLinkedin() {
    if(inputLinkedin.value !== '') {
        linkedin.classList.remove('hidden');
    }
    else {
        linkedin.classList.add('hidden');
    }  
    
};
inputLinkedin.addEventListener('keyup', addLinkedin);

inputLinkedin.addEventListener('keyup', showLinkedin);

//GITHUB
const github = document.querySelector('.github');
const inputGithub = document.querySelector('#github');
const githubIcon = document.querySelector('.sm-link-github');
const valueGithub = inputGithub.value;


function addGithub() {
    github.classList.remove('hidden');
    githubIcon.href = `https://www.github.com/${valueGithub}`;
}
function showGithub() {
    if(inputGithub.value !== '') {
        github.classList.remove('hidden');
        // document.querySelector('.github-link').href = 'https://github.com/' + githubInfo.value;
    }
    else {
        github.classList.add('hidden');
    }  
    
};
inputGithub.addEventListener('keyup', addGithub);
inputGithub.addEventListener('keyup', showGithub);

