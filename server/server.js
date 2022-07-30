const dotenv = require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const socketio = require('socket.io');
const port = process.env.MY_PORT
const cookieParser = require('cookie-parser');

const connectDB = require('./config/mongoose.config')
connectDB()
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
require('./routes/task.route')(app)
require('./routes/taskMaster.route')(app)

const server = app.listen(port, () => console.log(`${port}`))

const io = socketio(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    }
})

io.on('connection', (socket) => {
    console.log('Server Side of socket id:' + socket.id);
    socket.on('task_created', (data) => {
        socket.broadcast.emit('task_added', data)
        
    })
    
})