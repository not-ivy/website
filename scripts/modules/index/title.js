import anime from 'animejs';
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

const refreshTitle = setInterval(() => {
  while (title.firstChild) {
    title.removeChild(title.firstChild);
  }
  refresh();
}, 3000);

const displayContent = () => {
  clearInterval(refreshTitle);
  title.style.animation = 'none';
  title.style.color = 'var(--background)';
  anime.timeline({
    targets: '#title',
    easing: 'easeInOutSine',
  }).add({
    translateX: '-50%',
    translateY: '-50%',
    fontSize: 0,
    borderWidth: 10,
  }).add({
    rotate: {
      value: 90,
      duration: 500,
    },
  }).add({
    opacity: 0,
    fontSize: '3000px',
    duration: 1000,
  });
  setTimeout(() => {
    document.getElementById('home').style.display = 'block';
    document.getElementById('home').style.animation = 'fadein 1s forwards';
    document.getElementById('bar').style.display = 'flex';
    document.getElementById('bar').style.animation = 'fadein 1s forwards';
    title.style.display = 'none';
  }, 3000);
};

title.addEventListener('click', displayContent);
