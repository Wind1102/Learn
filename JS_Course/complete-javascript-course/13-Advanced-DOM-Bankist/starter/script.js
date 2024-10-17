'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (ev) {
  ev.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////

const message = document.createElement('div');

message.classList.add('cookie-message');
message.innerHTML =
  'we use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

const header = document.querySelector('.header')
header.append(message);


const gotIT = document.querySelector('.btn--close-cookie');
gotIT.addEventListener('click', (ev)=> {
  message.remove();
  console.log(header);
})

console.log(header);

// document.documentElement.style.setProperty()

// const logo = document.querySelector('.nav__logo');
// // console.log(logo.alt)
// // console.log(logo.src);
// // console.log(logo);
// logo.classList.toggle('test')
// console.log(logo.className);

// console.log(logo.classList.contains('tes'));
// console.log(logo.className);
// console.log(logo.dataset.versionNumber)


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');

btnScrollTo.addEventListener('click',(ev)=>{
  const s1coords = section1.getBoundingClientRect();
  const s2coords = section2.getBoundingClientRect();
  console.log(s1coords);
  console.log(s2coords);
  // window.scrollTo(s1coords.left + window.scrollX,s1coords.top + window.scrollY);
  console.log(s2coords.top - s1coords.top);
  // console.log(window.scrollX, window.scrollY);
console.log(btnScrollTo.clientWidth, btnScrollTo.clientHeight);


})

