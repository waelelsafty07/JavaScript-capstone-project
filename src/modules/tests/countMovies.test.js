import TotalItems from '../totalItems.js';

describe('TotalItems', () => {
  it('should return the total number of items in an array', () => {
    const items = ['Movie 1', 'Movie 2', 'Movie 3'];
    const result = TotalItems(items);
    expect(result).toEqual(3);
  });

  it('should return 0 if the input array is empty', () => {
    const emptyArray = [];
    const result = TotalItems(emptyArray);
    expect(result).toEqual(0);
  });

  it('should return error if the input not array', () => {
    const notArray = '' || {};
    const result = TotalItems(notArray);
    expect(result).toBe('This is not Array');
  });
});
