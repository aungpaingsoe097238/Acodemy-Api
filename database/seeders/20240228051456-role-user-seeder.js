"use strict";

const { Op } = require("sequelize");
const User = require("../../app/models").User;
const Role = require("../../app/models").Role;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const role = await Role.findOne({
      where: {
        name: "Developer",
      },
    });

    const users = await User.findAll();
    const userRoles = users.map((user) => {
      return {
        userId: user.id,
        roleId: role.id,        
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("UserHaveRoles", userRoles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserHaveRoles", {
      [Op.or]: [{ userId: 1 }],
    });
  },
};
