
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')
let mongdb = require('mongodb')

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

app.use(require('./middlewares/flash.js'))

app.get('/', (request, response) => {
  //console.log(request.session)
  //console.log(response.locals.flash.error)
  response.render('pages/index')
})

app.post('/', (request, response) =>{
  if (request.body.message === undefined || request.body.message === '') {
    request.flash('error', "vous n'avez pas posté de message")
    response.redirect('/')
  } else {
    let Message = require('./models/message')
    Message.create(request.body.message, function(){
        request.flash('success', 'Merci !')
        response.redirect('/')
    })
    //
  }
})

app.listen(8088)
