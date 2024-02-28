const login = {
  email: {
    notEmpty: { errorMessage: "Email field is required." },
    isEmail: { errorMessage: "Invalid email." },
  },
  password: {
    notEmpty: true,
    errorMessage: "Password field is required.",
  },
};

module.exports = {
  login,
};
