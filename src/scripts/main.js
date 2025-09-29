'use strict';

const populations = [...document.querySelectorAll('span.population')].map(
  (el) => Number.parseInt(el.textContent.replaceAll(',', '')),
);

const totalElement = document.querySelector('span.total-population');
const avgElement = document.querySelector('span.average-population');

const total = populations.reduce((acc, num) => acc + num, 0);
const avg = Math.round(total / populations.length);

totalElement.textContent = total.toLocaleString('en-US');
avgElement.textContent = avg.toLocaleString('en-US');
