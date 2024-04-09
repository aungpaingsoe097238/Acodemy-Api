const OurTeamMember = require("../../../models").OurTeamMember;

const store = {
  name: {
    notEmpty: { errorMessage: "Name field is required." },
    custom: {
      options: async (value, { req }) => {
        if (value) {
          const existingTeamMember = await OurTeamMember.findOne({
            where: { name: value },
          });
          if (existingTeamMember) {
            throw new Error("Name must be unique.");
          }
        }
      },
    },
  },
  position: { errorMessage: "Position field is required." },
  contact: { errorMessage: "Contact field is required." },
};

const update = {
  name: {
    optional: true,
  },
  position: { optional: true },
  contact: { optional: true },
};

module.exports = {
  store,
  update,
};
