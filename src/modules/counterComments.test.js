import counterComment from './counterComments.js';

describe('counterComment.js', () => {
  it('should count the number of comment on the page', () => {
    // Arrange
    document.body.innerHTML = '<div class="list-items">hello</div><div class="list-items">hello</div><div class="list-items">hello</div>';
    // Act
    const list = document.querySelectorAll('.list-items');
    const result = counterComment(list);
    // Assertor
    expect(result).toBe(3);
  });
});
