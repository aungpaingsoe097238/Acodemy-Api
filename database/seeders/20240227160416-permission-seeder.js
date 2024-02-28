"use strict";

/** @type {import('sequelize-cli').Migration} */

const Permission = require("../../app/models").Permission;
const Role = require("../../app/models").Role;

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

    // Add all permissions to Admin Role
    const permissions = await Permission.findAll();
    const adminRole = await Role.findOne({
      where: {
        name: "Developer",
      },
    });

    const roleHavePermissions = permissions.map((permission) => {
      return {
        roleId: adminRole.id,
        permissionId: permission.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("RoleHavePermissions", roleHavePermissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Permissions", null, {});
    await queryInterface.bulkDelete("RoleHavePermissions", null, {});
  },
};
