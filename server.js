
let express = require('express')
let app = express()

let bodyParser = require('body-parser')

let session = require('express-session')

app.use('/assets', express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(session({
  secret: 'clesecrete',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (request, response) => {
  if (request.session.error) {
    response.locals.error = request.session.error
    request.session.error = undefined
  }
  response.render('pages/index')
})

app.post('/', (request, response) =>{
  if (request.body.message === undefined || request.body.message === '') {
    request.session.error= 'Le message est vide !'
    //response.render('pages/index', {error: "Vous n'avez pas entré de message"})
    response.redirect('/')
  }
})

app.listen(8088)
