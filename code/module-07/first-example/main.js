import { returnGreeting } from './greetings_module.js'; // imports a single function in the module
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module.js';
returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
returnGreetingLength('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
