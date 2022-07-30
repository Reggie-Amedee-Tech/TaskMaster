const mongoose = require('mongoose')

const db = process.env.DB_NAME

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB