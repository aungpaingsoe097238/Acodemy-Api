const OurTeamMember = require("../../../models").OurTeamMember;
const response = require("../../../helpers/response");

const index = async (req, res) => {
  const ourTeamMember = await OurTeamMember.findAll({
    order: [["id", "DESC"]],
  });
  for (const teamMember of ourTeamMember) {
    if (teamMember.contact) {
      teamMember.contact = JSON.parse(teamMember.contact);
    }
  }
  return response.success(res, "Team Member list successfully", ourTeamMember);
};

const show = async (req, res) => {
  try {
    const { id } = req.params;

    const ourTeamMember = await OurTeamMember.findByPk(id);

    if (!ourTeamMember) {
      return response.error(res, "Team member not found");
    }

    if (ourTeamMember.contact) {
      ourTeamMember.contact = JSON.parse(ourTeamMember.contact);
    }

    return response.success(
      res,
      "Team member show successfully",
      ourTeamMember
    );
  } catch (error) {
    return response.error(res, "Failed to show team member", error);
  }
};

module.exports = { index, show};
