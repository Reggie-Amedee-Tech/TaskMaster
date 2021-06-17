const TaskMaster = require('../model/taskmaster.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


module.exports = {
    register: (req, res) => {
        const taskMaster = new TaskMaster(req.body);
        taskMaster
            .save()
            .then(() => {
                res.json({ msg: 'successfully registered!', taskMaster: taskMaster })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    login: async (req, res) => {
        TaskMaster.findOne({ email: req.body.email })
            .then(taskmaster => {
                if (taskmaster === null) {
                    res.status(400).json({ mesg: 'Invalid Email!' })
                } else {
                    bcrypt
                        .compare(req.body.password, taskmaster.password)
                        .then(passwordIsValid => {
                            if (passwordIsValid) {
                                res
                                    .cookie(
                                        'tmToken',
                                        jwt.sign({ _id: taskmaster._id }, process.env.JWT_SECRET), {
                                        httpOnly: true
                                    }
                                    )
                                    .json({
                                        msg: 'Success',
                                        tasmmasterLogged: {
                                            name: taskmaster.name
                                        }
                                    })
                            }
                            else {
                                res.status(400).json({ msg: 'Invalid Login Attempt' })
                            }

                        })
                }
            })
            .catch(err => res.json(err))
    },

    logout: (req, res) => {
        res.clearCookie('master');
        res.json({ message: 'You are logged out!' })
    },

    getAll: (req,res) => {
        TaskMaster.findOne({_id: request.params.id})
        .then(tm=> res.json(tm))
        .catch(err=> res.json(err))
    }



}



