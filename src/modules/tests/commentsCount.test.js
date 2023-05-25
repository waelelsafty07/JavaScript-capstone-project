import totalComments from "../totalComments.js";

describe('Total Comments', () => {
  test('should return a number', () => {
    const array = ['First Show', 'Second Show'];
    const res = totalComments(array);
    expect(Number.isInteger(res)).toBe(true);
  });

  test('should return an error message', () => {
    const array = '';
    const res = totalComments(array);
    expect(res).toBe('This is not Array');
  });

  test('should be 2', () => {
    const array = ['First Show', 'Second Show'];
    const res = totalComments(array);
    expect(res).toBe(2);
  });

  test('should be 0', () => {
    const array = [];
    const res = totalComments(array);
    expect(res).toBe(0);
  });

  test('should be 1000000', () => {
    const array = [];

    for(let i = 0;i<1000000;i++){
      array.push(i);
    }
    const res = totalComments(array);
    expect(res).toBe(1000000);
  });
})

