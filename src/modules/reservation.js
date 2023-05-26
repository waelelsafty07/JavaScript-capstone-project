import components from './components';
import API from './api';
import { invo } from './env';

const API_URL = 'https://api.tvmaze.com/shows/';

class Reservation {
  loadReservation = async (event) => {
    const api = new API(API_URL);
    const movie = await api.getData(event.target.value);
    components.reservationPopUp(movie);
    this.closeModelEventListner();
    this.reservationFormEventListner();
  };

  unloadReservation = () => {
    components.closeReservationPopUp();
  };

  createReservation = () => {
  };

  reservationButtonEventListner = () => {
    const reservations = document.querySelectorAll('.btn-reservation');

    reservations.forEach((reservationButton) => {
      reservationButton.addEventListener('click', this.loadReservation);
    });
  };

  closeModelEventListner = () => {
    const closeBtn = document.querySelector('.close-model');
    closeBtn.addEventListener('click', this.unloadReservation);
  };

  reservationFormEventListner = () => {
    const movieId = document.querySelector('.reservation-div');
    const form = document.querySelector('.reservation-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = event.target[0].value;
      const startDate = event.target[1].value;
      const endtDate = event.target[2].value;
      this.saveReservation(movieId.getAttribute('movieid'), name, startDate, endtDate);
      form.reset();
    });
  };

  saveReservation = (id, name, startDate, endtDate) => {
    const api = new API(`${invo}reservations`);
    const body = {
      item_id: id,
      username: name,
      date_start: startDate,
      date_end: endtDate,
    };
    api.fetchData(`${invo}reservations`, 'POST', body)
      .then(() => {
        this.reloadReservarions(id);
      })
      .catch((error) => {
        throw error;
      });
  };

  reloadReservarions = (id) => {
    components.paintReservations(id);
  };
}

export default new Reservation();