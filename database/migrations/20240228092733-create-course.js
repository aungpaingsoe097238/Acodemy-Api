"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Courses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      slug: {
        type: Sequelize.STRING,
      },
      except: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      categoryId: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      skill: {
        type: Sequelize.ENUM("Beginner", "Intermediate", "Advanced"),
      },
      image_url: {
        type: Sequelize.STRING,
      },
      lectures: {
        type: Sequelize.INTEGER,
      },
      duration: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Courses");
  },
};
