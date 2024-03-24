"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Programming",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "UI/UX",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Networking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "AI",
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
