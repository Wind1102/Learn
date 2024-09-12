'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');
console.log(btnOpenModel)
const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i=0 ; i< btnOpenModel.length;i++){
    btnOpenModel[i].addEventListener('click',openModel);
}

btnCloseModel.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

document.querySelector('body').addEventListener('keydown', function(event){
    console.log(event);
    // if(.key === 'Escape' && !modal.classList.contains('hidden')){
    //     closeModel();123
    // }
})
