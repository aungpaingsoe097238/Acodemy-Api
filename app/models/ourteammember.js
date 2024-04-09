'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OurTeamMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OurTeamMember.init({
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    contact: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'OurTeamMember',
  });
  return OurTeamMember;
};