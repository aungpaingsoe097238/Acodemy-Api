"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Programming",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UI/UX",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Networking",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AI",
          parentId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
