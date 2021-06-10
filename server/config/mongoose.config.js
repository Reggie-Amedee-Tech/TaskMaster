const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/taskworld', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('established conncection to the server'))
    .catch(() => console.log('failed to establish connection'))