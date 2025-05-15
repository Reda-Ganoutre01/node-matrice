// index.test.js
const { sayHello } = require('./index');

test('should greet properly', () => {
  const result = sayHello("Reda Ganoutre");
  expect(result).toMatch(/Hello Reda Ganoutre/);
});
