'use strict';

const populations = [...document.querySelectorAll('span.population')].map(
  (el) => {
    const text = el.textContent || '';
    const cleared = text.replace(/[^\d-]/g, '');
    const num = Number(cleared);

    if (Number.isFinite(num)) {
      return num;
    }
  },
);

if (populations.length > 0) {
  const total = populations.reduce((acc, num) => acc + num, 0);
  const avg = Math.round(total / populations.length);

  const totalElement = document.querySelector('span.total-population');
  const avgElement = document.querySelector('span.average-population');

  totalElement.textContent = total.toLocaleString('en-US');
  avgElement.textContent = avg.toLocaleString('en-US');
}
