const jwt = require("jsonwebtoken");

module.exports = {
  generateJwt: async (user, next) => {
    try {
      var payload = { userId: user._id, admin: user.isAdmin };
      var token = await jwt.sign(payload, process.env.TOKEN_SECRET);
      return token;
    } catch (error) {
      next(error);
    }
  },
  validateJwt: async (req, res, next) => {
    try {
      var token = req.headers["authorization"] || "";
      if (!token && !req.isGuestAllowed) {
        return res.status(401).json({ message: "token required" });
      }
      var payload = await jwt.verify(token, process.env.TOKEN_SECRET);
      req.userId = payload.userId;
      req.admin = payload.admin;
      next();
    } catch (error) {
      if (req.isGuestAllowed) {
        next();
      } else {
        return res
          .status(401)
          .json({ error: error.message || "something went wrong" });
      }
    }
  },

  allowGuest: (req, res, next) => {
    req.isGuestAllowed = true;
    next();
  },
};
