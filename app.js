require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const morgan = require('morgan');

const app = express();

const PORT = process.env.PORT;

// Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// Middlewares
app.use(express.static('public'));

// Routes 
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Curso de Node',
        name: 'Pablo Rodríguez',
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        title: 'Curso de Node',
        name: 'Pablo Rodríguez',
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        title: 'Curso de Node',
        name: 'Pablo Rodríguez',
    });
});

app.get('/404', (req, res) => {
    res.render('404');
});

app.get('*', (req, res) => {
    res.redirect('/404');
});

app.get('/hello-world', (req, res) => {
    res.send('Serving HelloWorld in its respective route');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${ PORT }`);
});
