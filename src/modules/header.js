import '../styles/header.css';
import logo from '../assets/restLogo.png';

function createHeader() {
  const header = document.createElement('header');
  header.id = 'header';

  const img = document.createElement('img');
  img.alt = 'Best Restaurant Ever';
  img.src = logo;

  const h1 = document.createElement('h1');
  h1.textContent = 'Best Restaurant Ever';

  header.appendChild(img);
  header.appendChild(h1);

  return header;
}

export default createHeader;
