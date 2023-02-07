import '../styles/home.css';
import mainImage from '../assets/main-image.jpg';

function createHomePage() {
  const section = document.createElement('section');
  section.id = 'hero';

  const header1 = document.createElement('h2');
  header1.textContent = 'Welcome to The Best Resturant Ever';
  section.appendChild(header1);

  const img = document.createElement('img');
  img.alt = 'Our resturant';
  img.src = mainImage;
  section.append(img);

  const header2 = document.createElement('h2');
  header2.textContent = 'The best resturant in the area';
  section.append(header2);

  const para = document.createElement('p');
  para.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          unde incidunt dignissimos iusto? Rem pariatur iusto ea veniam odit
          voluptatem, quibusdam suscipit deleniti? Molestiae sunt eos deserunt.
          Quibusdam aperiam ratione ullam reiciendis a alias nesciunt possimus
          placeat, provident vitae aut est quas natus veritatis nostrum aliquam
          asperiores maiores! Nihil, autem et? Eveniet quas ipsam quis ipsa! Ex
          facilis recusandae, voluptate quibusdam delectus quasi quidem culpa ea
          ipsa, sequi odit perspiciatis excepturi aliquid vel ut voluptatum!
          Excepturi nulla id quaerat aspernatur veniam repudiandae, voluptates
          totam nostrum deserunt necessitatibus neque officia et quae quibusdam
          itaque accusantium consectetur ratione porro! Quod, dolore iusto.`;
  section.appendChild(para);

  return section;
}

export default createHomePage;
