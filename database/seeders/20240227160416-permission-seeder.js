"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const allPermissions = [
      "user-list",
      "user-create",
      "user-show",
      "user-edit",
      "user-delete",
      "role-list",
      "role-create",
      "role-show",
      "role-edit",
      "role-delete",
      "permission-list",
      "permission-create",
      "permission-show",
      "permission-edit",
      "permission-delete",
    ];

    const permissionObj = allPermissions.map((permissionName) => {
      return {
        name: permissionName,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("Permissions", permissionObj, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Permissions", null, {});
  },
};
