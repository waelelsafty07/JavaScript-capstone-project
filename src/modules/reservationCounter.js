class ReservationCounter {
  getReservationCount = (resulvations) => {
    const reservationsCount = (Array.isArray(resulvations) ? resulvations.length : '0');
    return reservationsCount;
  }
}

export default new ReservationCounter();