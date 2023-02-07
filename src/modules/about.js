import '../styles/about.css';

function createAbout() {
  const section = document.createElement('section');
  section.id = 'about';

  const h2 = document.createElement('h2');
  h2.textContent = 'About Our Restaurant';
  section.appendChild(h2);

  const description = document.createElement('div');
  description.classList.add('description');

  const header1 = document.createElement('h3');
  header1.textContent = 'We are here since 1995';
  description.appendChild(header1);

  const para1 = document.createElement('p');
  para1.textContent = `Ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
            eaque nulla quibusdam consectetur laborum placeat atque nam tenetur
            obcaecati rerum.`;
  description.appendChild(para1);

  const header2 = document.createElement('h3');
  header2.textContent = 'We opened several branches';
  description.appendChild(header2);

  const para2 = document.createElement('p');
  para2.textContent = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
            facere aliquam reiciendis possimus. Qui nulla fuga recusandae cumque
            esse atque maxime voluptatum assumenda, culpa quibusdam incidunt!
            Aperiam maiores amet saepe.`;
  description.appendChild(para2);

  const header3 = document.createElement('h3');
  header3.textContent = 'Our Vision';
  description.appendChild(header3);

  const para3 = document.createElement('p');
  para3.textContent = `Dolor sit amet consectetur adipisicing elit. Fugiat ab explicabo
            provident laborum eaque pariatur animi eligendi maiores, nostrum
            ipsum fugit a! Doloremque harum eveniet natus magni necessitatibus
            id ad quia omnis? Consequuntur suscipit cum similique, dolorem
            molestias magnam debitis?`;
  description.appendChild(para3);

  section.appendChild(description);

  return section;
}

export default createAbout;
