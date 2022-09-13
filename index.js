require('dotenv').config()
const fortune = require('./lib/fortune')
const handlers = require('./lib/handlers')
const express = require('express')
const expressHandlebars = require('express-handlebars')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 22222
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors());


//Настройка механизма представлений Handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.get('/players', handlers.players);

app.get('/get', handlers.get);

app.post('/get', handlers.post);


//Пользовательская страница 404
app.use(handlers.notFound)

//Пользовательская страница 500
app.use(handlers.serverError)
if (require.main === module) {
    app.listen(PORT, () => console.log(
        `Express запущен на порту ${PORT}; ` +
        `нажмите Crtl + C для завершения`
    ))

} else {
    module.exports = app
}
/*новый коммент*/ 