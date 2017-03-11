[browser demo](https://jsfiddle.net/99frub1w/)

[node.js demo](https://runkit.com/58c3c6a5864b970014628998/58c458dd5f72c8001438e9ae/branches/master)

```javascript

const tahta = require('tahta')

// random

const avatar = tahta()

console.log(avatar)

// or meta

avatar = tahta({ meta:
'f577bba830904cfa93087dbc4462ee18e#15151916151314111215' })

console.log(avatar)

// and size

avatar = tahta({ size: 150, meta:
'f577bba830904cfa93087dbc4462ee18e#15151916151314111215' })

console.log(avatar)

```

![gif](https://media.giphy.com/media/dQwzWuis5Re8M/giphy.gif)
