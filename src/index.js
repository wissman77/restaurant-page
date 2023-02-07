import createAbout from './modules/about';
import createContact from './modules/contact';
import createFooter from './modules/footer';
import createHeader from './modules/header';
import createHomePage from './modules/home';
import createMenu from './modules/menu';
import createNavbar from './modules/navbar';

const HOME = 'Home';
const MENU = 'Menu';
const ABOUT = 'About';
const CONTACT = 'Contact';

const mainModule = (() => {
  const pageLoad = (page) => {
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const header = createHeader();
    content.append(header);
    const navbar = createNavbar(page);
    content.appendChild(navbar);

    switch (page) {
      case HOME:
        content.appendChild(createHomePage());
        break;
      case MENU:
        content.appendChild(createMenu());
        break;
      case ABOUT:
        content.appendChild(createAbout());
        break;
      case CONTACT:
        content.appendChild(createContact());
        break;
    }

    const footer = createFooter();
    content.appendChild(footer);
  };

  return {
    pageLoad,
  };
})();

mainModule.pageLoad(HOME);

export default mainModule;
