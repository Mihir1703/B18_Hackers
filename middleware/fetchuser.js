let jwt = require('jsonwebtoken');
const config = require('../app-config.json')
const JWT_SECRET = config.JWT_SECRET;

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(200).send({success:false, error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.phone = data.user.phone;
        next();
    } catch (error) {
        res.status(200).send({success:false, error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;