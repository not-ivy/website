const mutations = ['AlphaBetaFirstChild', 'AlphaBetaSecondChild', 'AlphaBetaThirdChild', 'AlphaBetaFourthChild', 'AlphaBetaFifthChild', 'AlphaBetaSixthChild', 'AlphaBetaSeventhChild', 'AlphaBetaEighthChild'];

const randomMutation = () => mutations[Math.floor(Math.random() * mutations.length)];
const mutationForElement = (element) => {
  element.style.fontFamily = randomMutation();
};
export {
  randomMutation,
  mutationForElement,
};
