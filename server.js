
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
  let Message = require('./models/message')
  Message.getAll(function(messages) {
    response.render('pages/index', {messages: messages})
  })
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
  }
})

app.get('/message/:id', (request, response) => {
  let Message = require('./models/message')
  Message.find(request.params.id, function(message){
    response.render('message/show', {messages: message})
  })
})
app.listen(8088)
