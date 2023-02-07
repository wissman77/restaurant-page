import '../styles/navbar.css';
import { mainModule } from '../index';

const links = [
  { href: '#home', text: 'Home' },
  { href: '#menu', text: 'Menu' },
  { href: '#about', text: 'About' },
  { href: '#contact', text: 'Contact' },
];

function selectTab(e) {
  e.preventDefault();
  const links = document.querySelectorAll('.navbar a');
  links.forEach((link) => link.classList.remove('active'));
  e.target.classList.add('active');
  mainModule.pageLoad(e.target.textContent);
}

function createNavbar(activePage) {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const ul = document.createElement('ul');

  links.forEach((link) => {
    const Item = document.createElement('li');
    const anchor = document.createElement('a');
    if (activePage === link.text) {
      anchor.classList.add('active');
    }
    anchor.addEventListener('click', selectTab);
    anchor.href = link.href;
    anchor.textContent = link.text;
    Item.appendChild(anchor);
    ul.appendChild(Item);
  });

  navbar.appendChild(ul);

  return navbar;
}

export default createNavbar;
