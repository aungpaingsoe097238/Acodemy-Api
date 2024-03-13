const StudentReview = require("../../../models").StudentReview;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const studentReviews = await StudentReview.findAll({
    order: [["id", "DESC"]],
  });
  return response.success(res, "Student review list successfully", studentReviews);
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const studentReview = await StudentReview.findByPk(id,{
      include: [
        {
          attributes: ["id", "name"],
        },
      ],
    });

    if (!studentReview) {
      return response.error(res, "Student review not found");
    }

    return response.success(res, "Student review show successfully", studentReview);
  } catch (error) {
    return response.error(res, "Failed to show student review");
  }
};

module.exports = {
  index,
  show,
};
