const title = document.getElementById('title');
const content = document.getElementById('content');

const mutations = ["AlphaBetaFirstChild", "AlphaBetaSecondChild", "AlphaBetaThirdChild", "AlphaBetaFourthChild", "AlphaBetaFifthChild", "AlphaBetaSixthChild", "AlphaBetaSeventhChild", "AlphaBetaEighthChild"];
title.style.fontFamily = mutations[Math.floor(Math.random() * mutations.length)];

const interval = setInterval(() => {
  title.style.fontFamily = mutations[Math.floor(Math.random() * mutations.length)];
}, 3000)

function displayContent() {
  title.style.animation = "fadeout 1.5s forwards";
  setTimeout(() => {
    window.location.href = "content.html";
  }, 1500)
}