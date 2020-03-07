var accents = require('remove-accents');
let args = process.argv.slice(2, process.argv.length);
let result = args.map(a => accents(a));
console.log(result.join('\n'));