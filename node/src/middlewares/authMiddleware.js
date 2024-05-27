const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  jwt.verify(token, process.env.SECRET_KEY , (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: 'Token expired or invalid' });
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = authMiddleware;