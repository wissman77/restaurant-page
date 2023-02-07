import '../styles/menu.css';
import burger from '../assets/burger.jpg';
import salad from '../assets/salad.jpg';
import spaghetti from '../assets/spaghetti.jpg';
import schnitzel from '../assets/schnitzel.jpg';
import pizza from '../assets/pizza.jpg';
import steak from '../assets/steak.jpg';

const dishes = [
  {
    name: 'Burger',
    price: 35,
    image: burger,
  },
  {
    name: 'Salad',
    price: 15,
    image: salad,
  },
  {
    name: 'Spaghetti',
    price: 33,
    image: spaghetti,
  },
  {
    name: 'Schnitzel',
    price: 15,
    image: schnitzel,
  },
  {
    name: 'Pizza',
    price: 10,
    image: pizza,
  },

  {
    name: 'Steak',
    price: 50,
    image: steak,
  },
];

function createMenu() {
  const section = document.createElement('section');
  section.id = 'menu';

  const h2 = document.createElement('h2');
  h2.textContent = 'Our Dishes';
  section.appendChild(h2);

  const menuPanel = document.createElement('div');
  menuPanel.classList.add('menu-panel');

  dishes.forEach((dish) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const h3 = document.createElement('h3');
    h3.textContent = dish.name;
    card.appendChild(h3);

    const img = document.createElement('img');
    img.alt = dish.name;
    img.src = dish.image;
    card.appendChild(img);

    const h4 = document.createElement('h4');
    h4.textContent = `Price: ${dish.price}$`;
    card.appendChild(h4);

    const para = document.createElement('p');
    para.textContent = `The Best ${dish.name} Ever.`;
    card.appendChild(para);

    menuPanel.appendChild(card);
  });

  section.appendChild(menuPanel);

  return section;
}

export default createMenu;
