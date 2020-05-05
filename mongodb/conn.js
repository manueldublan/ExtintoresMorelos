const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/extintoresmor';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true  } )
.then(() => console.log('connected to database...'))
.catch(err => console.log('refuse to connect...',err));