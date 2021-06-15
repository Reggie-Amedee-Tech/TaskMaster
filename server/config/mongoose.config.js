const mongoose = require('mongoose');
const db_name = process.env.DB_NAME

mongoose.connect('mongodb://localhost/' + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('established conncection to the server'))
    .catch(() => console.log('failed to establish connection'))