const fs = require('fs');
const {readFileSync,writeFileSync} = require('fs');
const path = require('path');
console.log('start')
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
writeFileSync('./content/result.txt',`Here is the result: ${first},${second}`,{flag:'a'})
console.log(first,second);
console.log('done with the stask');
console.log('start next')