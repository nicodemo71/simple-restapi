const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser())

app.get('/', (req, res) => {
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
    res.cookie("SESSIONID", new Date().getDate())
    res.send('Rest Api is running')
})

app.post('/', (req, res) => {
    let value = JSON.stringify(req.body, null, 2)
    console.log(value)
    res.cookie("SESSIONID", new Date().getDate())
    res.status(200).send('post works')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))