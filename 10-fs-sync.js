const { readFileSync, writeFileSync, write } = require('fs')
console.log('Start')
const first = readFileSync('./content/test.txt','utf-8')
console.log(first)

writeFileSync('./content/newF.txt',`Here is the result : ${first}`,{flag: 'a'}) //το flag 'α' αντι να κανει write , κανει append στο ηδη υπαρχον αρχειο
console.log('done with this task')
console.log('starting the next one')