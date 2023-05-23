const home = document.querySelector('.home');

export default class TVmazeAPI {
  constructor() {
    this.url = 'https://api.tvmaze.com/shows';
  }

  async displayShow(itemId) {
    const response = await fetch(this.url);
    const data = await response.json();

    const item = data.find((item) => item.id === itemId);

    const popupDiv = document.createElement('div');

    if (item) {
      const close = document.createElement('i');
      const popupImgDiv = document.createElement('div');
      const popupImg = document.createElement('img');
      const popupName = document.createElement('div');
      const popupDetails = document.createElement('ul');
      const popupDet1 = document.createElement('li');
      const popupDet2 = document.createElement('li');
      const popupDet3 = document.createElement('li');
      const popupDet4 = document.createElement('li');

      popupImg.src = item.image.medium;

      popupDiv.classList.add('d-flex');
      popupDiv.classList.add('flex-d-column');
      popupDiv.classList.add('align-items-center');

      close.classList.add('fa-solid', 'fa-xmark', 'fa-2xl', 'close');
      popupName.classList.add('show-name');
      popupDetails.classList.add('d-grid');
      popupDetails.classList.add('details');
      popupDiv.classList.add('popup');

      popupName.textContent = item.name;
      popupDet1.textContent = `Genre: ${item.genres}`;
      popupDet2.textContent = `Rating: ${item.rating.average}`;
      popupDet3.textContent = `Language: ${item.language}`;
      popupDet4.textContent = `Runtime: ${item.runtime} min`;

      close.addEventListener('click', () => {
        popupDiv.classList.add('d-none');
      });

      home.appendChild(popupDiv);

      popupDiv.appendChild(close);
      popupDiv.appendChild(popupImgDiv);
      popupDiv.appendChild(popupName);
      popupDiv.appendChild(popupDetails);

      popupImgDiv.appendChild(popupImg);
      popupDetails.appendChild(popupDet1);
      popupDetails.appendChild(popupDet2);
      popupDetails.appendChild(popupDet3);
      popupDetails.appendChild(popupDet4);
    }
    return popupDiv;
  }
}
