import Bound from 'bounds.js';

const boundary = Bound({
  margins: { bottom: -400 }
});
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
const h5 = document.querySelector('h5');

boundary.watch(h3, () => {
  h3.classList.add('active');
  //boundary.unWatch(h3);
}, () => {
  h3.classList.remove('active');
});