// random

const tahta = require('./index')

let avatar = tahta()

console.log(avatar)

// or meta

avatar = tahta({ meta: 'f577bba830904cfa93087dbc4462ee18e#15151916151314111215' })

console.log(avatar)

// and size

avatar = tahta({ size: 150, meta:
  'f577bba830904cfa93087dbc4462ee18e#15151916151314111215' })

console.log(avatar)
