const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/test.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/newF.txt','utf8',(err,result)=> {
        if(err){
            console.log(err)
            return
        }
        const second =result
        writeFile(
            './content/result-async.txt',
            `Here is the result ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('done with the task');
            }
        )
    })
})

console.log('starting next task')