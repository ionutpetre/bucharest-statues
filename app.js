'use strict';

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cache = require('cache-control'),
    cookieParser = require('cookie-parser'),
    cors = require('cors');

let statueApi = require('./routes/api/statue');
let app = express();

app.set('host', process.env.IP || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(cors());
app.use(cache({
    '/api/**': false,
    '/**': 500
}));

app.use('/api/statues', statueApi);

app.listen(app.get('port'), app.get('host'), () => {
    console.log("Server starting on " + app.get('port'));
});