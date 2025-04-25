// Valor de kelvin K°
const kelvin = 293;

// Valor de Celsius
const celsius = kelvin - 273;

// Valor de fahrenheit
let fahrenheit = celsius * (9/5) + 32; 
fahrenheit = Math.floor(fahrenheit);

// Mensagem da temperatura fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)