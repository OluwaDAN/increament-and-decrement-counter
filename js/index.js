let btnAdd = document.querySelector('#add');
let btnSub = document.querySelector('#sub');
let btnNeutral = document.querySelector('#neutral');
let input = document.querySelector('input');


btnAdd.addEventListener('click', () =>{
     input.value = parseInt(input.value) + 1;
});

btnSub.addEventListener('click', () =>{
    input.value = parseInt(input.value) - 1;
});

btnNeutral.addEventListener('click', e =>{
    e.preventDefault();
    input.value = 0;
});