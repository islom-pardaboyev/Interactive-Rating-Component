'use strict';

const elButtons = document.querySelectorAll('.btn');

const arr = [];

elButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('bg-[#F6790C]');
        button.classList.toggle('text-[#fff]');
        button.classList.toggle('duration-200');
    });
    arr.push(button);

    
});