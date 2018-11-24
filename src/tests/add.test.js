const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello, ${name}.`;

test('should add two numbers', () => {
  const result = add(1, 3);
  expect(result).toBe(4);
});

test('Should generate greeting', () => {
  const result = generateGreeting('John');
  expect(result).toBe('Hello, John.');
});

test('Should generate greeting', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello, Anonymous.');
});
