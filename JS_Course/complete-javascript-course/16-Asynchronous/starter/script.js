'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const countryImage = document.querySelector('.country__img');
const route = 'https://countries-api-836d.onrender.com/countries'


const renderCountry = function(data, className = ''){
    const html = `
            <article class="country ${className}">
            <img class="country__img" src="${data.flag}"/>
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${data.population}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
            </div>
            </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend',html)
}

const getCountryData = function(country){

    const request = new XMLHttpRequest();
    request.open('GET',`${route}/name/${country}`);
    request.send();

    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.response);
        renderCountry(data);
        const neighbour = data.borders?.[0];
        if(!neighbour) return;
        const request1 = new XMLHttpRequest();
        request1.open('GET',`${route}/alpha/${neighbour}`);
        request1.send();
        request1.addEventListener('load', function(){
            const data2 = JSON.parse(request1.responseText);
            renderCountry(data2,'neighbour');
        });
    });
}

getCountryData('Vietnam');
