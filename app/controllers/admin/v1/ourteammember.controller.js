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

const store = async (req, res) => {
  try {
    const { name, position, contact } = req.body;

    if(!req.filename){
      return response.error(res, "Image field is required");
    }  

    const ourTeamMember = await OurTeamMember.create({
      name,
      position,
      contact,
      imageUrl: req.filename
    });

    return response.success(
      res,
      "Team member created successfully",
      ourTeamMember
    );
  } catch (error) {
    return response.error(res, "Failed to create team member", error);
  }
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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, position, contact } = req.body;
    const ourTeamMember = await OurTeamMember.findByPk(id);

    if (!ourTeamMember) {
      return response.error(res, "Team member not found");
    }

    if (name) {
      ourTeamMember.name = name;
    }

    if (position) {
      ourTeamMember.position = position;
    }

    if (contact) {
      ourTeamMember.contact =JSON.stringify(contact);
    }

    if (req.filename) {
      ourTeamMember.imageUrl = req.filename;
    }

    await ourTeamMember.save();

    return response.success(res, "Team member updated successfully", ourTeamMember);
  } catch (error) {
    return response.error(res, "Failed to update team member", error);
  }
};

const drop = async (req, res) => {
  try {
    const { id } = req.params;
    const ourTeamMember = await OurTeamMember.findByPk(id);
    if (!ourTeamMember) {
      return response.error(res, "Team member not found");
    }
    await ourTeamMember.destroy();
    return response.message(res, "Team member deleted successfully");
  } catch (error) {
    return response.error(res, "Failed to delete team member", error);
  }
};

module.exports = { index, store, show, update, drop };
