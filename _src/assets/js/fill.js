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



// function writeEmail(e) {
//     const email = e.currentTarget;
//     const value = email.value;
//     if ( value === '') {
//         emailIcon.innerHTML = '';
//     } else {
//         emailIcon.innerHTML = `<a href="mailto:${value}></a>`;
//      }
//     //  console.log(writeEmail);
//   }
  
//   inputEmail.addEventListener('keyup', writeEmail);


//-------------------------MAIL
const inputEmail = document.querySelector('#email');
const emailIcon = document.querySelector('.mail');
const value = inputEmail.value;

function addEmail() {
        emailIcon.classList.remove('hidden');
        emailIcon.href = `mailto:${value}`;
    }
    
inputEmail.addEventListener('keyup', addEmail);



//---------------------TELEFONO
const inputPhone = document.querySelector('#phone');
const phoneIcon = document.querySelector('.telephone');
const valuePhone = inputPhone.value;

function addPhone() {
    phoneIcon.classList.remove('hidden');
    phoneIcon.href = `tel:${valuePhone}`;
}

inputPhone.addEventListener('keyup', addPhone);



//----------------------LINKEDIN
const inputLinkedin = document.querySelector('#linkedin');
const linkedinIcon = document.querySelector('.linkedin');
const valuelinkedin = inputLinkedin.value;

function addLinkedin() {
    linkedinIcon.classList.remove('hidden');
    linkedinIcon.href = valuePhone;
}

inputLinkedin.addEventListener('keyup', addLinkedin);



//_-----------------------GITHUB
const inputGithub = document.querySelector('#github');
const GithubIcon = document.querySelector('.github');
const valueGithub = inputGithub.value;

function addGithub() {
    GithubIcon.classList.remove('hidden');
    GithubIcon.href = valuePhone;
}

inputGithub.addEventListener('keyup', addGithub);
