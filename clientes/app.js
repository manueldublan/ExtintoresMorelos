const path = require('path');
const mongoose = require('mongoose');



//settings 
app.set('views', path.join(__filename, 'mongodb'));
app.set('view engine','ejs');

app.use(morgan('dev'));
