require('dotenv').config()
const express = require ('express')
const expressHandlebars = require('express-handlebars')


const app = express()
const PORT = process.env.PORT || 22222

const  fortunes  =  [
    "Победи  свои  страхи,  или  они  победят  т е б я ." ,
    "Рекам  нужны  и с т о к и ." ,
    "Не  бойся  неведом ого.",
    "Тебя  ждет  приятный  сю рприз.",
    "Будь  проще  везде,  где  только  можно.",
    ]

//Настройка механизма представлений Handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
   res.render('home')
});

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', {fortune: randomFortune})
});

//Пользовательская страница 404
app.use((req, res) =>{   
    res.status(404)
    res.render('404')
})

//Пользовательская страница 500
app.use((err, req, res, next) => {
    console.error(err.mesage)   
    res.status(500)
    res.render('500')
})

app.listen(PORT, () => console.log(
    `Express запущен на порту ${PORT}; ` + 
    `нажмите Crtl + C для завершения`
))
