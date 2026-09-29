const hello = require('./src/index.js');

if (typeof hello !== 'function') {
  throw new Error('hello n\'est pas une fonction');
}

const result = hello();
if (result !== 'Hello from build') {
  throw new Error(`Résultat inattendu : ${result}`);
}

console.log('Tests passed:', result);
