const {readFile, writeFile} = require('fs')
for (i =0 ; i < 1000 ; i++){
    writeFile('./content/big-file.txt',`This is line ${i + 1}\n`,{flag:'a'},(err)=>{
        if (err) {
            console.log(err)
        }
    });
}