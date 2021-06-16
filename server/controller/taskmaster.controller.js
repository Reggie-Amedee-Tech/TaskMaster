const TaskMaster = require('../model/taskmaster.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    register: (req, res) => {
        const taskMaster = new TaskMaster(req.body);
        taskMaster.save()
            .then(() => {
                res.json({ msg: 'successfully registered!', taskMaster: taskMaster })
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    login: async (req, res) => {
        TaskMaster.findOne({ email: req.body.email })
            .then((tm) => {
                if (tm === null) {
                    res.status(400).json({ msg: 'invalid credentials!' })
                } else {
                    bcrypt.compare(req.body.password, tm.password)
                        .then((passwordMatch) => {
                            if (passwordMatch) {
                                console.log('credentials are valid!');
                                res.cookie('mastertoken', jwt.sign({
                                    _id: tm._id,
                                    userId: tm.userId
                                }, process.env.JWT_SECRET), {
                                    httpOnly: true
                                }).json({
                                    message: "Fully Logged in!",
                                    loggedMaster: {
                                        userId: tm.userId
                                    }
                                })
                            } else {
                                res.status(400).json({ msg: 'invalid credentials!' })
                            }

                        })
                        .catch(err => {
                            res.status(400).json({ msg: 'invalid credentials!' })
                        })
                }
            })
    },
    logout: (req,res) => {
        res.clearCookie('master');
        res.json({message: 'You are logged out!'})
    }

}



