const CustomError = require('../utils/CustomError');

const rbac = (requiredRole) => {
  return (req, res, next) => {
    console.log("RBAC Middleware: req.user before role check:", req.user); // Log req.user

    const userRole = req.user.role; // Assuming req.user is set by an authentication middleware
    console.log("RBAC Middleware: userRole derived from req.user:", userRole); // Log derived userRole
    console.log("RBAC Middleware: requiredRole:", requiredRole); // Log requiredRole

    if (userRole !== requiredRole) {
      console.log("Role mismatch. Access forbidden.");
      return next(new CustomError('Forbidden: You do not have access to this resource.', 403));
    }

    next(); // If the role matches, proceed to the next middleware or route handler
  };
};

module.exports = rbac;
