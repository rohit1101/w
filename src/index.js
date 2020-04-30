import lodash from 'lodash';
import './style.css';
import Picture from '../images/image.png';

const addComponent = component => document.body.appendChild(component);

const textComponent = text => {
  const element = document.createElement('div');
  element.innerHTML = lodash.join(text, ' ');
  element.classList.add('hello');
  addComponent(element);
};

const imageComponent = image => {
  const img = new Image();
  img.src = image;
  addComponent(img);
};

textComponent(['Hello', 'World', 'Batman', 'done', 1, 2, 3]);
imageComponent(Picture);

// console.log(styles);
// console.log(duplicate);
