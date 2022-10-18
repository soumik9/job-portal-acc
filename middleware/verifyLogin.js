const jwt = require('jsonwebtoken');

const verifyLogin = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) return res.status(401).send({ message: 'Unauthorized access' });
    
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(403).send({ message: 'Forbidden access' });
            req.user = decoded;
            next();
        });
    } catch (error) {
        res.status(403).json({ error: error.message, message: 'Invalid token!', success: false });
    }
}

module.exports = verifyLogin;