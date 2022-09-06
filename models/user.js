'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Users.hasMany(models.Posts, {
        foreignKey: "userId",
      });
      models.Users.belongsToMany(models.Posts, {
        through: "Likes",
        foreignKey: "userId",
      });
    }
  }
  User.init({
    id: {  
      primaryKey: true,
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      allowNull: false 
    },
    userId: {
      type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    velogtitle: DataTypes.STRING,
    email : DataTypes.STRING,
    gitaddress: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};