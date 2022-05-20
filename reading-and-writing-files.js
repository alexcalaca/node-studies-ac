
const fs = require('fs');

const variable = "Hey"
console.log(variable)

const textInput = fs.readFileSync('../boilerplate-expander/script.js', 'utf-8');
console.log("The content is " + textInput);
