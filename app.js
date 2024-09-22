const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router.js');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extend:true}));
app.use('/', routes);
app.listen(3000, () => {
    console.log('server running on http://localhost:3000');
});
