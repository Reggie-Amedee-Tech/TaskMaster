const jwt = require('jsonwebtoken')


module.exports.secret = secret
module.exports.authenticate = (req,res, next) => {
    jwt.verify(req.cookies.tm, JWT_SECRET, (err, payload) => {
        if (err) {
            res.status(401).json({verified: false})
        } else {
            next();
        }
    })
}