// MOODULES
// ComonJS, every file is module 

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
require('./7-mind-grenade')

console.log(data)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)