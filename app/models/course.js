'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    except: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    skill: DataTypes.STRING,
    image_url: DataTypes.STRING,
    lectures: DataTypes.INTEGER,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};