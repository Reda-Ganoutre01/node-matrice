// index.test.js
const { sayHello } = require('./index');

test('should greet properly', () => {
  const result = sayHello("Laraqui");
  expect(result).toMatch(/Hello Laraqui/);
});
