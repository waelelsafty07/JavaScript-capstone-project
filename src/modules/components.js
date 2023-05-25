class Components {
  reservationPopUp = (movie) => {
    const app = document.querySelector('.contient');
    const mainContent = document.querySelector('.movies-contient');
    const popUpDiv = document.createElement('div');
    popUpDiv.className = 'reservation-div';

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
    app.appendChild(popUpDiv);

    mainContent.classList.toggle('contient-in-backgound');
    return app;
  };

  closeReservationPopUp = () => {
    const mainContent = document.querySelector('.movies-contient');
    const popUpDiv = document.querySelector('.reservation-div');

    mainContent.classList.toggle('contient-in-backgound');
    popUpDiv.remove();
  };
}

export default new Components();