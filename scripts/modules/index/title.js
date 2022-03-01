import { getTranslation } from '../translation';

const translation = getTranslation();
const title = document.getElementById('title');
const mutations = ['AlphaBetaFirstChild', 'AlphaBetaSecondChild', 'AlphaBetaThirdChild', 'AlphaBetaFourthChild', 'AlphaBetaFifthChild', 'AlphaBetaSixthChild', 'AlphaBetaSeventhChild', 'AlphaBetaEighthChild'];
title.style.fontFamily = mutations[Math.floor(Math.random() * mutations.length)];

const refresh = () => {
  translation.title.split('').forEach((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    span.style.fontFamily = mutations[Math.floor(Math.random() * mutations.length)];
    title.appendChild(span);
  });
};

const displayContent = () => {
  title.style.animation = 'fadeout 1.5s forwards';
  setTimeout(() => {
    window.location.href = 'content.html';
  }, 1500);
};

title.addEventListener('click', displayContent);

setInterval(() => {
  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }
  refresh();
}, 3000);
