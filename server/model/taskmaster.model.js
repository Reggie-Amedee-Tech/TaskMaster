const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const TaskMasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your full name"]
    },
    userId: {
        type: String,
        required: [true, "Please enter a valid user ID"]
    },
    email: {
        type: String,
        required: [true, "Please enter a valid user ID"]
    },
    imageUrl: {
        type: String,
        required: [true, "Please enter a valid user ID"]
    },
    password: {
        type: String,
        minlength: [8, "Password must be more 8 characters long"]
    },
    
}, {timestamps: true})

TaskMasterSchema.virtual('confirmPassword')
    .get(()=> this._confirmPassword)
    .set(value=> this._confirmPassword = value)

TaskMasterSchema.pre('validate', function(next){
    if(this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'This password does not match the current password entered!')
    }
    next();
});

TaskMasterSchema.pre('save', function(next){
    bcrypt.hash(this.password, 10)
    .then((hashedPassword) => {
        this.password = hashedPassword;
        next();
    })
})

const TaskMaster = mongoose.model('TaskMaster', TaskMasterSchema)

module.exports = TaskMaster;