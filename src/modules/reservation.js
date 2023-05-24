import components from './components';
import API from './api';

const API_URL = 'https://api.tvmaze.com/shows/';

class Reservation{

  loadReservation = async (event) => {
    const api = new API(API_URL);
    const movie = await api.getData(event.target.value);
    components.reservationPopUp(movie);
    this.closeModelEventListner();
  };

  unloadReservation = () => {
    components.closeReservationPopUp();
  };

  createReservation = (movieId) => {  // eslint-disable no-unused-vars
  };

  reservationButtonEventListner = () => {
    const reservations = document.querySelectorAll('.btn-reservation');

    reservations.forEach(reservationButton => {
      reservationButton.addEventListener('click', this.loadReservation);
    });
  };

  closeModelEventListner = () => {
    const closeBtn = document.querySelector('.close-model');
    closeBtn.addEventListener('click', this.unloadReservation);
  };
}

export default new Reservation();