
const fs = require('fs');

const variable = "Hey"
console.log(variable)

const textInput = fs.readFileSync('../boilerplate-expander/script.js', 'utf-8');
console.log("The content is " + textInput);


const textOutput = 'This is what I wrotee ${textInput}';
fs.writeFileSync('../boilerplate-expander/new_file.js', textOutput);

console.log('File written successfully')
