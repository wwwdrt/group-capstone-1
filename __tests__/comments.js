// eslint-disable-next-line import/extensions
import countComments from '../src/components/Counters';

describe('countComments', () => {
  test('should return 0 when there are no comments', () => {
    // Arrange
    document.body.innerHTML = `
      <div id="comments"></div>
    `;

    // Act
    const result = countComments();

    // Assert
    expect(result).toBe(0);
  });

  test('should return the correct count when there is a single comment', () => {
    // Arrange
    document.body.innerHTML = `
      <div id="comments">
        <li>Comment 1</li>
      </div>
    `;

    // Act
    const result = countComments();

    // Assert
    expect(result).toBe(1);
  });

  test('should return the correct count when there are multiple comments', () => {
    // Arrange
    document.body.innerHTML = `
      <div id="comments">
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
      </div>
    `;

    // Act
    const result = countComments();

    // Assert
    expect(result).toBe(3);
  });
});
