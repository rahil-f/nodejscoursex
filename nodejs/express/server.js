const express = require('express');

const portNumber = 8080;

const app = express();

app.use(randomAnswer);

/* app.get('/', (req, res) => {
    res.status(200).send('Hello World');
}); */
app.get('/user/:id', function(req, res, next) {
    res.send('USER');
});

app.all('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})
app.get('/test', function(req, res) {
    res.status(200).send('test');
});
app.get('/', randomAnswer, (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(portNumber, () => {
    console.log('Express application listening on port', portNumber);
});

function randomAnswer(req, res, next) {
    if (Math.round(Math.random())) {
        res.status(200).send('Answer by middleware');
    } else {
        next();
    }
}