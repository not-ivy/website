import { translation } from "../translation.js"

const title = document.getElementById('title');

title.innerText = translation.title;
title.addEventListener('click', displayContent);

const mutations = ["AlphaBetaFirstChild", "AlphaBetaSecondChild", "AlphaBetaThirdChild", "AlphaBetaFourthChild", "AlphaBetaFifthChild", "AlphaBetaSixthChild", "AlphaBetaSeventhChild", "AlphaBetaEighthChild"];
title.style.fontFamily = mutations[Math.floor(Math.random() * mutations.length)];

setInterval(() => {
  title.style.fontFamily = mutations[Math.floor(Math.random() * mutations.length)];
}, 3000)

function displayContent() {
  title.style.animation = "fadeout 1.5s forwards";
  setTimeout(() => {
    window.location.href = "content.html";
  }, 1500)
}
