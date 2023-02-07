import '../styles/contact.css';
import mapImage from '../assets/map.png';

const openingDays = [
  { day: 'Sunday', hours: '09:00-23:00' },
  { day: 'Monday', hours: '09:00-23:00' },
  { day: 'Tuesday', hours: '09:00-23:00' },
  { day: 'Wednesday', hours: '09:00-23:00' },
  { day: 'Thursday', hours: '09:00-23:00' },
  { day: 'Friday', hours: '09:00-16:00' },
  { day: 'Saturday', hours: '10:00-00:00' },
];

function createContact() {
  const section = document.createElement('section');
  section.id = 'contact';

  const h2 = document.createElement('h2');
  h2.textContent = 'Contact Us';
  section.appendChild(h2);

  const contactDetails = document.createElement('div');
  contactDetails.classList.add('contact-us-details');
  section.appendChild(contactDetails);

  const map = document.createElement('div');
  map.classList.add('map');
  contactDetails.appendChild(map);

  const mapHeader = document.createElement('h3');
  mapHeader.textContent = 'Our Map';
  map.appendChild(mapHeader);

  const mapFigure = document.createElement('img');
  mapFigure.alt = 'Map';
  mapFigure.src = mapImage;
  map.appendChild(mapFigure);

  const addressDiv = document.createElement('div');
  addressDiv.classList.add('address');
  contactDetails.appendChild(addressDiv);

  const addressHeader = document.createElement('h3');
  addressHeader.textContent = 'Address';
  addressDiv.appendChild(addressHeader);

  const addressTag = document.createElement('address');
  addressTag.textContent = 'King George, 8, Ramat Gan';
  addressDiv.appendChild(addressTag);

  const paraPhone = document.createElement('p');
  paraPhone.textContent = 'Phone: ';
  addressDiv.appendChild(paraPhone);
  const phoneAnchor = document.createElement('a');
  phoneAnchor.href = 'tel:+972-123676413';
  phoneAnchor.textContent = '+972-123676413';
  paraPhone.appendChild(phoneAnchor);

  const paraEmail = document.createElement('p');
  paraEmail.textContent = 'Email: ';
  addressDiv.appendChild(paraEmail);
  const emailAnchor = document.createElement('a');
  emailAnchor.href = 'mailto:info@bestresturant.com';
  emailAnchor.textContent = 'info@bestresturant.com';
  paraEmail.appendChild(emailAnchor);

  const openingHoursDiv = document.createElement('div');
  openingHoursDiv.classList.add('opening-hours');
  contactDetails.appendChild(openingHoursDiv);

  const openingHoursHeader = document.createElement('h3');
  openingHoursHeader.textContent = 'Opening Hours';
  openingHoursDiv.appendChild(openingHoursHeader);

  const openingHoursTable = document.createElement('table');
  openingHoursDiv.appendChild(openingHoursTable);
  const tableTr = document.createElement('tr');
  openingHoursTable.appendChild(tableTr);
  const tableThDay = document.createElement('th');
  tableThDay.textContent = 'Day';
  tableTr.appendChild(tableThDay);
  const tableThHours = document.createElement('th');
  tableThHours.textContent = 'Hours';
  tableTr.appendChild(tableThHours);

  openingDays.forEach((item) => {
    const tr = document.createElement('tr');
    openingHoursTable.appendChild(tr);

    const tdDay = document.createElement('td');
    tdDay.textContent = item.day;
    tr.appendChild(tdDay);

    const tdhours = document.createElement('td');
    tdhours.textContent = item.hours;
    tr.appendChild(tdhours);

    openingHoursTable.appendChild(tr);
  });

  return section;
}

export default createContact;
