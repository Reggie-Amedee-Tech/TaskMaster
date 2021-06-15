require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.MY_PORT
const cookieParser = require('cookie-parser');

require('./config/mongoose.config');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
require('./routes/task.route')(app)

app.listen(port, () => console.log('Listening on port 8000!'))