'use strict'
const express = require('express')
const app = express()


// ROUTES
app.get('/', (req, res) => res.send('Hello World!'))

// STARTING SERVER AT PORT 3000
app.listen(3000, () => console.log('Example app listening on port 3000!'))

// EXPORTING SERVER
module.exports = app