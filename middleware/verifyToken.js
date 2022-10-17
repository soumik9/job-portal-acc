const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(" ")?.[1];
        if (!token) return res.status(401).json({ message: 'You are not authenticate!', success: false });

        const decoded = await promisify(jwt.verify)(token, process.env.TOKEN_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ error: error.message, message: 'Invalid token!', success: false });
    }
}

module.exports = { verifyToken }