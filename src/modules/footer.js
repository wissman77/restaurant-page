import '../styles/footer.css';

function createFooter() {
  const footer = document.createElement('footer');

  const para = document.createElement('p');
  para.innerHTML = 'Created by &copy; Wissman77 &nbsp;';
  const anchor = document.createElement('a');
  anchor.textContent = 'SourceCode';
  anchor.href = 'https://github.com/wissman77/restaurant-page';
  anchor.target = '_blank';
  para.appendChild(anchor);
  footer.appendChild(para);

  const imagesPara = document.createElement('p');
  imagesPara.textContent = 'All Images was crafted by several artists from ';
  const unsplashLink = document.createElement('a');
  unsplashLink.textContent = 'unsplash.com';
  unsplashLink.href = 'https://unsplash.com/';
  unsplashLink.target = '_blank';
  imagesPara.appendChild(unsplashLink);
  footer.appendChild(imagesPara);

  return footer;
}

export default createFooter;
