const jwt = require('jsonwebtoken')

module.exports = {
    authenticate(req, res, next) {
        console.log(req.cookies.tmtoken, "this is the token!")
        jwt.verify(
            
            req.cookies.tmtoken,
            process.env.JWT_SECRET,
            (err, payload) => {
                if (err) {
                    console.log(err)
                    res.status(401).json({ verified: false })
                } else {
                    next()
                }
            }
        )
    }


}