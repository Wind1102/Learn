'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const countryImage = document.querySelector('.country__img');
const route = 'https://countries-api-836d.onrender.com/countries';

// const renderCountry = function (data, className = '') {
//   const html = `
//             <article class="country ${className}">
//             <img class="country__img" src="${data.flag}"/>
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${data.population}</p>
//                 <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                 <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//             </div>
//             </article>
//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const getCountryData = function(country){

//     const request = new XMLHttpRequest();
//     request.open('GET',`${route}/name/${country}`);
//     request.send();

//     request.addEventListener('load', function(){
//         const [data] = JSON.parse(this.response);
//         renderCountry(data);
//         const neighbour = data.borders?.[0];
//         if(!neighbour) return;
//         const request1 = new XMLHttpRequest();
//         request1.open('GET',`${route}/alpha/${neighbour}`);
//         request1.send();
//         request1.addEventListener('load', function(){
//             const data2 = JSON.parse(request1.responseText);
//             renderCountry(data2,'neighbour');
//         });
//     });
// }

// getCountryData('Vietnam');

// const getCountryData = function (country) {
//   fetch(`${route}/name/${country}`)
//     .then(response => {
//         if(!response.ok) throw new Error(`Country not found`);
//         response.json()

//     }
//     )
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0];
//         if(!neighbour) return;
//         // country2
//         return  fetch(`${route}/alpha/${neighbour}`);
//     }).then(response=> response.json()).then(data => renderCountry(data,'neighbour'))
//     .finally(()=>{
//         console.log('haha');
//     })
// };

// btn.addEventListener('click', function(ev){
//     // getCountryData('vietnam');
// })

// const getContryFromCoord = function(coord){
//     return fetch(`https://geocode.xyz/${coord.latitude},lon=${coord.longitude}?geoit=json`).then(response=>
//         response.json())
// }

// navigator.geolocation.getCurrentPosition((position)=>{
//     let country;
//     const coord = position.coords
//     getContryFromCoord(coord).then(data=> {
//         country = ;
//         console.log(data);
//     })
//     console.log(country);

// })

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('Lotter draw is happening');

//   setTimeout(function () {
//     let isResolve;
//     if (Math.random() * 10 > 0.5) isResolve = true;
//     else isResolve = false;
//     isResolve ? resolve('You win') : reject(new Error('You Loss'));
//   },2000);
// });

// lotteryPromise
//   .then(data => console.log(data))
//   .catch(error => console.log(error, 1));


// console.log("Getting Position");


// const getPosition = function(){
//     return new Promise(function(resolve,reject){
//         navigator.geolocation.getCurrentPosition(resolve,reject);
//     })
// };

// getPosition().then(pos => console.log(pos));


// const getJSON = function(url){
//     return fetch(url).then(response => response.json())
// }


// const createImage = function(imgUrl){
//     return new Promise((resolve,reject) => {
//         const img = document.createElement('img');
//         img.src = imgUrl;
//         img.addEventListener('load', function(){
//             resolve(img);
//         })
//         img.addEventListener('error', function(){
//             reject(new Error('not found'))
//         })

        
//     })
// }

// createImage('img/img-1.jpg').then(img => {
//     countriesContainer.insertAdjacentElement('beforeend', img);
// }).catch(error => console.log(error))



// const whereAmI = async function(country) {
//     const contry = await fetch(`${route}/name/${country}`).then(response=> response.json())
//     return contry
// }

// console.log(whereAmI('vietnam'))


// const get3Country = async function(...countries){
//     const data = await Promise.all([
//         getJSON(`${route}/name/${countries[0]}`),
//         getJSON(`${route}/name/${countries[1]}`),
//         getJSON(`${route}/name/${countries[2]}`)
            
//     ])
//     console.log(data);
// }


// get3Country('vietnam','usa','germany')


// const get3Country = async function(...countries){
//     const data = await Promise.any([
//         getJSON(`${route}/name/${countries[0]}`),
//         getJSON(`${route}/name/${countries[1]}`),
//         getJSON(`${route}/name/${countries[2]}`)
            
//     ])
//     console.log(data);
// }


// get3Country('vietnam','usa','germany');


// const loadAll = function(imgArr){
//     return new Promise((resolve,reject) => {
//         const img = document.createElement('img');
//         img.src = imgUrl;
//         img.addEventListener('load', function(){
//             resolve(img);
//         })
//         img.addEventListener('error', function(){
//             reject(new Error('not found'))
//         })    
//     })
// }

// get3Country('vietnam','usa','germany')

// const createImg = function(url){
//     return new Promise((resolve, reject)=> {
//         const imgElement = document.createElement('img');
//         imgElement.src = url;
//         countriesContainer.insertAdjacentElement('beforeend',imgElement);
//         imgElement.addEventListener('load',function(ev){
//             resolve(imgElement);
//         })

//         imgElement.addEventListener('error', function(ev){
//             reject(imgElement);
//         })
//     })
// }

// const wait = function(second){
//     return new Promise((resolve, reject)=>{
//         setTimeout(resolve, second*1000);
//     })

// }

// const loadAll = function(imgArray){
//     const listImagePromise = [];
//     imgArray.forEach(img => {
//         listImagePromise.push(createImg(img));
//     });
//     Promise.all(listImagePromise).then(resolve => console.log(resolve)).catch(error => console.log(error));
// }

// loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg'])

// const loadPause = async function(){
//     try{
//         let img = await createImg('img/img-1.jpg');
//         console.log('Img1 is load');
        
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// loadPause().then(resolve=> console.log(resolve)).catch(error => console.log(error,1));


// const loadPause = async function () {
//     try{
//         await wait(2);
//         let img = await createImg('img/img-1.jpg');
//         console.log('Img1 is load');
//         await wait(2);
//         img.style.display = 'none';
//         await wait(2);
//         img = await createImg('img/img-2.jpg')
//         console.log('Img2 is load');
//         await wait(2);
//         console.log(img);
//         img.style.display = 'none';
//         await wait(2);
//         img = await createImg('img/img-3.jpg')
//         console.log(img);
//         console.log('Img3 is load');
//         await wait(2);
//         img.style.display = 'none';
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// loadPause().then(resolve => console.log("Image is Load")).catch(error => console.log(error)
// )
const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// PART 2
const loadAll = async function (imgArr) {
    try {
      const imgs = imgArr.map(async img => await createImage(img));
      const imgsEl = await Promise.all(imgs);
      console.log(imgsEl);
      imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
      console.error(err);
    }
  };
  loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);


  

