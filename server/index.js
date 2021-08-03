const express = require('express')
const cors = require('cors')
const port = 4004
const controller = require('./controller')

const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/houses', controller.getHouse)
app.delete('/api/houses/:id', controller.deleteHouse)
app.put('/api/houses/:id', controller.updateHouse)
app.post('/api/houses', controller.createHouse)

app.listen(port, () => console.log('Why do we fall, Bruce?'))