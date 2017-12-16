let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.set('view engine', 'ejs')

app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.render('pages/index', {test: 'Hello world'})
})


app.post('/', (request, response) =>{
  //console.log(request.body)
  if (request.body.message === undefined || request.body.message === '') {
    response.render('pages/index', {error: "Vous n'avez pas entré de message"})
  }
})

app.listen(8088)
