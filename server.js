let express = require('express')

let app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))

app.get('/', (request, response) => {
  response.render('pages/index', {test: 'Hello world'})
})


app.listen(8088)
