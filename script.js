'use strict';

const counterEl = document.getElementById('count-el');
const resetBtn = document.getElementById('reset');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const saveEl = document.getElementById('save-el');

let count = 0;
counterEl.textContent = count;

// Handlers
// Add Passenger
increment.addEventListener('click', function () {
  count++;
  counterEl.textContent = count;
});

// Remove Passenger
decrement.addEventListener('click', function () {
  count > 0 && count--;
  counterEl.textContent = count;
});

// Reset
resetBtn.addEventListener('click', function () {
  count = 0;
  counterEl.textContent = count;
});

const save = () => {
  const str = ` ${count} -`;
  saveEl.textContent += str;
  count = 0;
  counterEl.textContent = count;
};
