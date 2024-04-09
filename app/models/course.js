'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    static associate(models) {
      Course.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
     });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    except: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    skill: DataTypes.ENUM("Beginner", "Intermediate", "Advanced"),
    rating: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    lectures: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    certificateStatus: DataTypes.ENUM(0,1),
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};