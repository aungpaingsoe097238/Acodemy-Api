const { validationResult } = require("express-validator");

const customValidationResult = (req, res, next, message = "Validation errors") => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      let errObj = {};
      errors.array().map((error) => {
         errObj[error.path] = error.msg;
      });
      return res.status(400).json({
         message,
         error: errObj,
      });
   }
   // handle the request as usual
   next();
};

module.exports = customValidationResult;
