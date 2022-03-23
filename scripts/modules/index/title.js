import { getTranslation } from '../translation';
import { mutationForElement } from '../fontMutator';

const translation = getTranslation();
const title = document.getElementById('title');
mutationForElement(title);

const refresh = () => {
  translation.title.split('').forEach((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    mutationForElement(span);
    title.appendChild(span);
  });
};

const displayContent = () => {
  title.style.animation = 'fadeout 1.5s forwards';
  setTimeout(() => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('bar').style.display = 'flex';
  }, 1500);
};

title.addEventListener('click', displayContent);

setInterval(() => {
  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }
  refresh();
}, 3000);
