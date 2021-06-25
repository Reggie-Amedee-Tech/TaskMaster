const TaskMaster = require('../model/taskmaster.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { secret } = require('../config/jwt.config');


module.exports = {
    register: (req, res) => {
        const taskMaster = new TaskMaster(req.body);
        taskMaster
            .save()
            .then((tm) => {
                const tmToken = jwt.sign({
                    id: taskMaster._id
                }, process.env.JWT_SECRET);

                res
                    .cookie('tmToken', tmToken, secret, {
                        httpOnly: true
                    })
                    .json({ msg: 'successfully registered!', taskMaster: taskMaster })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },


    // const tmaster = await TaskMaster.findOne({email: req.body.email})

    // if (tmaster === null) {
    //     return res.sendStatus(400).json({msg: 'Email cannot be found'})
    // }

    // const correctPassword = await bcrypt.compare(req.body.password, tmaster.password)

    // if (!password) {
    //     return res.sendStatus(400).json({msg: 'Password cannot be found!'})
    // }

    //     const tmToken = jwt.sign({
    //         is: tmaster._id
    //     }, process.env.SECRET_KEY)
    //     res
    //     .cookie('tmToken', tmToken, secret, {
    //         httpOnly: true
    //     })
    //     .json({msg: 'Success!'})

    login: async (req, res) => {
        TaskMaster.findOne({ email: req.body.email })
            .then(taskmaster => {
                if (taskmaster === null) {
                    res.status(400).json({ msg: 'Invalid Email!' })
                } else {
                    bcrypt
                        .compare(req.body.password, taskmaster.password)
                        .then(passwordIsValid => {
                            if (passwordIsValid) {
                                res
                                    .cookie(
                                        'tmtoken',
                                        jwt.sign({
                                            userId: taskmaster._id, name: taskmaster.name
                                        }, process.env.JWT_SECRET),
                                        {
                                            httpOnly: true,
                                            expires: new Date(Date.now() + 900000)
                                        }
                                    )
                                    .json({
                                        msg: 'Success',
                                        taskmasterLogged: {
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
        res.clearCookie('tmtoken');
        res.json({ message: 'You are logged out!' })
    },

    getAll: (req, res) => {
        TaskMaster.find({})
            .populate("createdBy", 'userId')
            .then(tm => res.json(tm))
            .catch(err => res.json(err))
    }



}



