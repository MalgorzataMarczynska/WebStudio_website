const filterButtons = document.querySelector('.section__btn-menu');
const allButton = document.querySelector('button[data-filter="all"]');
const pagesButton = document.querySelector('button[data-filter="pages"]');
const appButton = document.querySelector('button[data-filter="app"]');
const designButton = document.querySelector('button[data-filter="design"]');
const marketingButton = document.querySelector(
  'button[data-filter="marketing"]',
);

const pagesCards = document.querySelectorAll('li[data-filter="pages"]');
const appCards = document.querySelectorAll('li[data-filter="app"]');
const designCards = document.querySelectorAll('li[data-filter="design"]');
const marketingCards = document.querySelectorAll('li[data-filter="marketing"]');

const cards = document.querySelectorAll('.gallery-cards__item');

filterButtons.addEventListener('click', selectButton);

function selectButton(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const selectedButton = event.target.dataset.filter;
  switch (selectedButton) {
    case 'all':
      cards.forEach(el => el.classList.remove('hidden'));
      break;
    case 'pages':
      cards.forEach(el => el.classList.add('hidden'));
      pagesCards.forEach(el => el.classList.remove('hidden'));
      break;
    case 'app':
      cards.forEach(el => el.classList.add('hidden'));
      appCards.forEach(el => el.classList.remove('hidden'));
      break;
    case 'design':
      cards.forEach(el => el.classList.add('hidden'));
      designCards.forEach(el => el.classList.remove('hidden'));
      break;
    case 'marketing':
      cards.forEach(el => el.classList.add('hidden'));
      marketingCards.forEach(el => el.classList.remove('hidden'));
      break;
  }
}
