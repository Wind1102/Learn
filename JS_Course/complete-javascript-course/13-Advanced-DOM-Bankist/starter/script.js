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

// const message = document.createElement('div');

// message.classList.add('cookie-message');
// message.innerHTML =
//   'we use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

// const header = document.querySelector('.header');
// header.append(message);

// const gotIT = document.querySelector('.btn--close-cookie');
// gotIT.addEventListener('click', ev => {
//   message.remove();
//   console.log(header);
// });

// console.log(header);

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

// const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
// const section2 = document.querySelector('#section--2');

// btnScrollTo.addEventListener('click', ev => {
//   // const s1coords = section1.getBoundingClientRect();

//   // window.scrollTo({
//   //   left: s1coords.left + window.scrollX,
//   //   top: s1coords.top + window.scrollY,
//   //   behavior: 'smooth',
//   // });
//   section1.scrollIntoView({behavior:'smooth'});
// });

// const h1 = document.querySelector('h1');
// h1.addEventListener(
//   'click',
//   function (ev) {
//     this.style.backgroundColor = 'blue';
//     // section1.scrollIntoView({behavior:'smooth'});
//     // ev.stopPropagation();
//     // ev.stopImmediatePropagation();
//     console.log(ev.target, ev.currentTarget);
//     ev.stopPropagation();
//   },
//   true
// );

// const headerTitle = document.querySelector('.header__title')
// headerTitle.addEventListener('click',function(ev){
//   this.style.backgroundColor = 'red';
//   console.log(ev.target,ev.currentTarget);
// })

// const linker = document.createElement('a');
// linker.href = 'https://www.facebook.com/'
// linker.innerText = 'Test Click'

// const header = document.querySelector('.header')
// console.log(header);
// header.append(linker)

// linker.addEventListener('click',function(ev){
//   ev.preventDefault();
//   console.log("test prevent Default");
// })

// Page navigation

// const buttonScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');
// console.log(section1);

// buttonScrollTo.addEventListener('click', function (ev) {
//   const s1coords = section1.getBoundingClientRect();
//   section1.scrollIntoView({
//     behavior: 'smooth',
//   });
// });

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click',function(ev){
//     ev.preventDefault();
//     console.log("Link");
//   })
// });

// document.querySelector('.nav__links').addEventListener('click', function (ev) {
//   console.log(ev.target);
//   console.log(ev.currentTarget);
//   if (ev.target.classList.contains('nav__link')) {
//     const id = ev.target.getAttribute('href');
//     const scrollTo = document.querySelector(id);
//     scrollTo.scrollIntoView({
//       behavior: 'smooth',
//     });
//   }
// });

// const h1= document.querySelector('h1');

// // Going Downward: Child
// console.log(typeof h1.innerHTML);
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);

// console.log(h1.parentElement);
// console.log(h1.parentNode);

// h1.closest('.header').style.background = 'var(--gradient-secondary)' ;

const tab = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (ev) {
  // if(ev.target.classList.contains('.operations__tab--1')){

  // }
  const clicked = ev.target.closest('.operations__tab');
  if (!clicked) return;

  tab.forEach(t => {
    t.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');
  const tabActive = clicked.dataset.tab;
  console.log(tabActive);
  tabsContent.forEach(tabContent => {
    tabContent.classList.remove('operations__content--active');
    if (tabContent.classList.contains(`operations__content--${tabActive}`)) {
      tabContent.classList.add('operations__content--active');
    }
  });
});

const nav = document.querySelector('.nav');

// nav.addEventListener('mouseover',function(ev){
//   if(ev.target.classList.contains('nav__link')){
//     const link = ev.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     console.log(siblings);
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el=>{
//       if(el != link){
//         el.style.opacity = 0.3;
//       }else{
//         el.style.opacity = 1;
//       }
//     });
//     logo.style.opacity = 0.3;
//     console.log("call");
//   }
// })

// nav.addEventListener('mouseout',function(ev){
//   if(ev.target.classList.contains('nav__link')){
//     const link = ev.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     console.log(siblings);
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el=>{
//         el.style.opacity = 1;
//     });
//     logo.style.opacity = 0.3;
//   }
// })

const handleEvent = function (ev) {
  if (ev.target.classList.contains('nav__link')) {
    const link = ev.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleEvent.bind(0.3));
nav.addEventListener('mouseout', handleEvent.bind(1));

// Sticky Navigation
const initialCoords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function(){
//   console.log(window.scrollY);
//   console.log(nav.classList);
//   if(window.scrollY > initialCoords.top){
//     nav.classList.add('sticky');

//   }
//   else nav.classList.remove('sticky');
// })

// const obsCallback = function(entries, observer){
//   entries.forEach(entry=>{
//     console.log(entry);
//   })
// }

// const obsOptions = {
//   root : null,
//   threshold: [0]
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect();
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const observerHeader = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px`,
});

observerHeader.observe(header);

// reveal sections

const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden')
});

// Lazi loading Images

const imageTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observe) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function (ev) {
    entry.target.classList.remove('lazy-img');
  });
  // entry.target.classList.remove('lazy-img');

  observe.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0.15,
  rootMargin: '200px',
});

imageTargets.forEach(img => imgObserver.observe(img));

const sliders = function () {
  let currSlide = 0;

  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const numSlide = slides.length;
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  const goToSlide = function (currSlide) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    });
  };
  const prevSlide = function () {
    if (currSlide !== 0) {
      currSlide -= 1;
    } else {
      currSlide = numSlide - 1;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  const nextSlide = function () {
    if (currSlide !== slides.length - 1) {
      currSlide += 1;
    } else {
      currSlide = 0;
    }
    goToSlide(currSlide);
    activateDot(currSlide);
  };

  btnLeft.addEventListener('click', prevSlide);

  btnRight.addEventListener('click', nextSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  const createDots = function () {
    slides.forEach((s, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class ="dots__dot" data-slide="${i}"></button>"`
      );
    });
  };

  createDots();
  dotContainer.addEventListener('click', function (ev) {
    if (ev.target.classList.contains('dots__dot')) {
      const { slide } = ev.target.dataset;
      currSlide = Number(slide);
      goToSlide(slide);
      activateDot(slide);
    }
  });

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const init = function () {
    goToSlide(0);
    activateDot(0);
  };

  init();
};

sliders();


