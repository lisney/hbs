const express = require('express')
const hbs = require('express-handlebars')

const app = express()

app.engine('hbs',hbs({
    extname:'hbs',
    defaultLayout:'layout',
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+ '/views/partials'
}))

app.set('view engine','hbs')
app.use(express.static(__dirname + "/src/images"))
app.use((req,res,next)=>{
    next();
})
const router = require('./router')(app)

app.listen(3000,()=>{
    console.log('Hello nodex!')
})
