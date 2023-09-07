import counterHomepage from './counterHomepage.js';

describe('counterHomepage', () => {
  test('should count the number of items on the homepage', () => {
    const data = [
      { itemID: 58695, comment: 'good' },
      { itemID: 56675, comment: 'good' },
      { itemID: 57695, comment: 'good' },
    ];
    const result = counterHomepage(data);
    expect(result).toBe(3);
  });
});
