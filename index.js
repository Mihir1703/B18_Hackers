const config = require('./app-config.json')
const DBconnect = require('./database/DBconnection')
const express = require('express')
const cors = require('cors')

const port = config.port
const app = express()
app.use(express.json())
DBconnect.connect(async (err) => {
    if (err) throw err;
    else {
        console.log("Connection successfull to database!!")
    }
});

app.use(cors())
app.use('/api/auth',require('./routes/auth'))

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`)
})