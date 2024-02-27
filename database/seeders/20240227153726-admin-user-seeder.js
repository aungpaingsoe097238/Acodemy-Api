"use strict";

const bcrypt = require("../../app/helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Admin",
        email: "superadmin@gmail.com",
        password: bcrypt.encode("password"),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
