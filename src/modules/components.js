import API from './api';
import { invo } from './env';

class Components {
  reservationPopUp = (movie) => {
    const app = document.querySelector('.contient');
    const mainContent = document.querySelector('.movies-contient');
    const popUpDiv = document.createElement('div');
    popUpDiv.className = 'reservation-div';
    popUpDiv.setAttribute('movieId', movie.id);

    const popUpHead = document.createElement('div');
    popUpHead.className = 'pop-up-head';

    const img = document.createElement('img');
    img.className = 'close-model';

    const headSpan = document.createElement('spa');

    const reservationImage = document.createElement('img');
    reservationImage.className = 'movie-Image';
    reservationImage.src = movie.image.original;

    const title = document.createElement('h1');
    title.textContent = movie.name;

    const summary = document.createElement('p');
    summary.className = 'summary';
    summary.innerHTML = movie.summary;

    const movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';

    const movieInfoLeft = document.createElement('div');
    movieInfoLeft.className = 'movie-info-right';

    const lang = document.createElement('span');
    lang.textContent = `Language: ${movie.language}`;

    const country = document.createElement('span');
    country.textContent = `Country: ${movie.network.country.name}`;

    const duration = document.createElement('span');
    duration.textContent = `Duration: ${movie.runtime}`;

    const network = document.createElement('span');
    network.textContent = `Network: ${movie.network.name}`;

    const movieInfoRight = document.createElement('div');
    movieInfoRight.className = 'movie-info-left';

    movieInfoLeft.appendChild(lang);
    movieInfoLeft.appendChild(country);

    movieInfoRight.appendChild(network);
    movieInfoRight.appendChild(duration);

    movieInfo.appendChild(movieInfoLeft);
    movieInfo.appendChild(movieInfoRight);

    popUpHead.appendChild(headSpan);
    popUpHead.appendChild(img);
    popUpDiv.appendChild(popUpHead);
    popUpDiv.appendChild(reservationImage);
    popUpDiv.appendChild(title);
    popUpDiv.appendChild(summary);
    popUpDiv.appendChild(movieInfo);
    popUpDiv.appendChild(this.createReservarionFrom());
    app.appendChild(popUpDiv);
    this.paintReservations(movie.id);

    mainContent.classList.toggle('contient-in-backgound');
    return app;
  };

  createReservarionFrom = () => {
    const reservationFormDiv = document.createElement('div');
    reservationFormDiv.className = 'reservation-form-div';

    const formTitle = document.createElement('h1');
    formTitle.textContent = 'Add a reservation';

    const form = document.createElement('form');
    form.className = 'reservation-form';

    const nameInput = document.createElement('input');
    nameInput.className = 'name-input';
    nameInput.placeholder = 'Your name';
    nameInput.type = 'text';
    nameInput.setAttribute('required', true);

    const dateInput = document.createElement('input');
    dateInput.className = 'date-input start-date';
    dateInput.placeholder = 'Start Date';
    dateInput.type = 'date';
    dateInput.setAttribute('required', true);

    const dateInputEnd = document.createElement('input');
    dateInputEnd.className = 'date-input end-date';
    dateInputEnd.placeholder = 'End Date';
    dateInputEnd.type = 'date';
    dateInputEnd.setAttribute('required', true);

    const submitButton = document.createElement('button');
    submitButton.className = 'submit-input';
    submitButton.textContent = 'Submit';

    form.appendChild(nameInput);
    form.appendChild(dateInput);
    form.appendChild(dateInputEnd);
    form.appendChild(submitButton);
    reservationFormDiv.appendChild(formTitle);
    reservationFormDiv.appendChild(form);
    return reservationFormDiv;
  };

  closeReservationPopUp = () => {
    const mainContent = document.querySelector('.movies-contient');
    const popUpDiv = document.querySelector('.reservation-div');

    mainContent.classList.toggle('contient-in-backgound');
    popUpDiv.remove();
  };

  reservations = (reservationArray = null) => {
    const div = document.createElement('div');
    div.className = 'reservations-div';
    const title = document.createElement('h2');
    title.className = 'reservation-title';
    title.innerHTML = `Reservations (${this.getReservationCount(reservationArray)})`;

    div.appendChild(title);
    if (reservationArray.error) {
      return div;
    }

    if (document.querySelector('.reservations-div')) {
      document.querySelector('.reservations-div').remove();
    }

    const ul = document.createElement('ul');
    reservationArray.reverse().forEach((reservation) => {
      const li = document.createElement('li');
      li.textContent = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;
      ul.appendChild(li);
    });
    div.appendChild(ul);

    return div;
  };

  paintReservations = (id) => {
    const popUpDiv = document.querySelector('.reservation-div');
    const api = new API(`${invo}reservations`);

    api.getData(`?item_id=${id}`)
      .then((results) => {
        popUpDiv.appendChild(this.reservations(results));
      })
      .catch((error) => {
        throw error;
      });
  };

  getReservationCount = (resulvations) => {
    const TotalItems = (Array.isArray(resulvations) ? resulvations.length : '0');
    return TotalItems;
  }
}

export default new Components();
