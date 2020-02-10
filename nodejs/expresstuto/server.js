const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('./middleWares/flash');


const portNumber = 8080;
const app = express();
app.set('view engine', 'ejs');
app.set('trust proxy', 1);


app.use('/assets', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'felix',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(flash);

app.get('/', (req, res) => {
    /*     res.status(200).send('Hello World');
     */
    /*  if (req.session.error) {
         res.locals.error = req.session.error;
         req.session.error = undefined;
     } */
    res.render('pages/index');

});

app.post('/', (req, res) => {
    if (req.body.message === undefined || req.body.message === "") {
        //req.session.error = "message invalide"
        /* res.render('pages/index', {
            error: "message invalide"
        }) */
        req.flash('error', 'message invalide');
        res.redirect('/');

    } else {
        let Message = require('./models/message')
        Message.create(req.body.message, function() {
            req.flash('success', 'merci du message');
            res.redirect('/');
        })
    }
});

app.listen(portNumber);