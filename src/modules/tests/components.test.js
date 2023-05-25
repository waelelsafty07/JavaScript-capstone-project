import reservationCounter from '../reservationCounter';

describe('Components', () => {
  it('Should return the total number of reservations in an array', () => {
    const reservations = [
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'test'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'pappi'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'felix'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'Nono'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'patrick'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'testg'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'pascal'
      },
      {
        date_start: '2023-05-25',
        date_end: '2023-05-25',
        username: 'fezzopro'
      }
    ];
    const result = reservationCounter.getReservationCount(reservations);
    expect(result).toEqual(8);
  });

  it('Should return 0 if the input array is empty', () => {
    const emptyReservations = [];
    const result = reservationCounter.getReservationCount(emptyReservations);
    expect(result).toEqual(0);
  });

  it('Should return error if the input not array', () => {
    const failedApiRequest = '' || {};
    const result = reservationCounter.getReservationCount(failedApiRequest);
    expect(result).toBe('0');
  });

  it('Should return 0 if the API returns error', () => {
    const failedApiRequest = {
      error: {
        status: 400,
        message: 'item_id not found.',
      },
    };
    const result = reservationCounter.getReservationCount(failedApiRequest);
    expect(result).toBe('0');
  });
});