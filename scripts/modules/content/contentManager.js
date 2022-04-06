import EventEmitter from 'events';

const contentElements = [];
const buttonEvent = new EventEmitter();

const hideAll = () => {
  [...contentElements].forEach((element) => {
    element.style.display = 'none';
  });
};

[...document.body.children].forEach((element) => {
  if (element.classList.contains('content')) {
    contentElements.push(element);
  }
});

contentElements.forEach((item) => {
  document.getElementById(`${item.id}-button`).addEventListener('click', () => {
    buttonEvent.emit('click', item);
  });
});

buttonEvent.on('click', (element) => {
  hideAll();
  element.style.display = 'block';
});

export default buttonEvent;
