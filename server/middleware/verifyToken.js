module.exports = {
  verifyTok(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers.authorization;
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
      req.token = bearerHeader;

      next();
    } else {
      // Forbidden
      res.status(403).json({
        message: 'Add token to header',
        error: true
      });
    }
  }
};
