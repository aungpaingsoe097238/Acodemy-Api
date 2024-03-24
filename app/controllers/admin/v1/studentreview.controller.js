const StudentReview = require("../../../models").StudentReview;
const Category = require("../../../models").Category;
const response = require("../../../helpers/response");
const toolbox = require("../../../utils/toolbox");

const index = async (req, res) => {
  const studentReviews = await StudentReview.findAll({
    order: [["id", "DESC"]],
  });

  return response.success(
    res,
    "Student review list successfully",
    studentReviews
  );
};

const store = async (req, res) => {
  try {
    const { name, review, rating } = req.body;

    if (!req.filename) {
      return response.error(res, "Image field is required");
    }

    const studentReview = await StudentReview.create({
      name: name,
      review: review,
      rating: rating,
      except: toolbox.except(review),
      imageUrl: req.filename,
    });

    return response.success(
      res,
      "Student review created successfully",
      studentReview
    );
  } catch (error) {
    return response.error(res, "Failed to create student revidw.");
  }
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const studentReview = await StudentReview.findByPk(id);

    if (!studentReview) {
      return response.error(res, "Student review not found");
    }

    return response.success(
      res,
      "Student review show successfully",
      studentReview
    );
  } catch (error) {
    console.log(error);
    return response.error(res, "Failed to show student review");
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, review, rating } = req.body;
    const studentReview = await StudentReview.findByPk(id);

    if (!studentReview) {
      return response.error(res, "Student review not found");
    }

    if (name) {
      studentReview.name = name;
    }

    if (review) {
      studentReview.review = review;
      studentReview.except = toolbox.except(review);
    }

    if (rating) {
      studentReview.rating = rating;
    }

    if (req.filename) {
        studentReview.imageUrl = req.filename;
    }

    await studentReview.save();

    return response.success(res, "Student review updated successfully.", studentReview);
  } catch (error) {
    return response.error(res, "Failed to update student review.");
  }
};

const drop = async (req, res) => {
  try {
    const { id } = req.params;
    const studentReview = await StudentReview.findByPk(id);
    if (!studentReview) {
      return response.error(res, "Student review not found");
    }
    await studentReview.destroy();
    return response.message(res, "Student review deleted successfully");
  } catch (error) {
    return response.error(res, "Failed to delete student review");
  }
};

module.exports = { index, store, show, update, drop };
