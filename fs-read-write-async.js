const fs = require('fs');
const {readFile,writeFile} = require('fs');
const path = require('path');
console.log('start')
readFile('./content/first.txt','utf8',(err, data) =>{
    if (err){
        console.log(err);
        return
    }
    console.log(data);
    const first = data
    readFile('./content/second.txt','utf8',(err,data)=>{
        if (err){
            console.log(err);
            return
        }
        console.log(data);
    const second = data
    writeFile('./content/result-cb.txt',`Here is the result: ${first},${second}`,(err,data)=>{
        if (err){
            console.log(err);
            return
        }
        console.log('done with this task');
    })
    })
});
console.log('start with next task');



