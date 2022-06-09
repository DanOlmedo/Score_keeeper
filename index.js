let count1 = document.querySelector('#winCount1');
let count2 = document.querySelector('#winCount2');
let count3 = document.querySelector('#winCount3');
let count4 = document.querySelector('#winCount4');

let add1 = document.querySelector('#player1But');
let add2 = document.querySelector('#player2But');
let add3 = document.querySelector('#player3But');
let add4 = document.querySelector('#player4But');

let currentCount1 = 0;
let currentCount2 = 0;
let currentCount3 = 0;
let currentCount4 = 0;

add1.addEventListener('click', () => {
    let count1 = document.querySelector('#winCount1');
    currentCount1 = currentCount1 + 1;
    count1.innerHTML = currentCount1;
});

add2.addEventListener('click', () => {
    let count2 = document.querySelector('#winCount2');
    currentCount2 = currentCount2 + 1;
    count2.innerHTML = currentCount2;
});

add3.addEventListener('click', () => {
    let count3 = document.querySelector('#winCount3');
    currentCount3 = currentCount3 + 1;
    count3.innerHTML = currentCount3;
});

add4.addEventListener('click', () => {
    let count4 = document.querySelector('#winCount4');
    currentCount4 = currentCount4 + 1;
    count4.innerHTML = currentCount4;
});