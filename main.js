// grabbing onto all the timeline list items
const items = document.querySelectorAll ('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= 
      (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// lopping through items and checking to see if it's in the viewport (se está aparecendo na tela, se sim, adiciona a classe 'show')
const run = () => 
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
// every time something enter the viewport it should add the class of 'show'
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);