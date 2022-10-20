const verifyRole = (...role) => {
    return (req, res, next) => {
      const userRole = req.user.role;
      if(!role.includes(userRole)) return res.status(403).json({ message: 'You are not authorized to access this', success: false });
      next();
    };
  };

  module.exports = verifyRole