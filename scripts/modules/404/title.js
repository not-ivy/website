import { mutationForElement } from '../fontMutator';

setInterval(() => {
  const items = [...document.getElementsByClassName('not-found-text')];
  items.forEach((item) => mutationForElement(item));
}, 3000);
