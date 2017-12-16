let app = require('express')()

app.set('view engine', 'ejs')


app.get('/', (request, response) => {
  response.render('pages/index', {test: 'Hello world'})
})


app.listen(8088)
