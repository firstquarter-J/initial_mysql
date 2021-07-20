const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3000)

//router
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트 실행중~~~~~~~~')
})