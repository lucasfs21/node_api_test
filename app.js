const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const votesRoute = require('./routes/votes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(votesRoute);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            message: error.message
        }
    })
})

module.exports = app;