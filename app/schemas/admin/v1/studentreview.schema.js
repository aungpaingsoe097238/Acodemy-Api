const store = {
  name: {
    notEmpty: { errorMessage: "Name field is required." },
  },
  review: {
    notEmpty: { errorMessage: "Review field is required." },
  },
  rating: {
    notEmpty: { errorMessage: "Rating field is required." }
  }
};


module.exports = {
  store
};
