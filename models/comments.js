'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Comments.belongsTo(models.Posts, {
        foreignKey: "postId",
      });
    }
  }
  Comments.init({
    commentId: { primaryKey: true, 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      allowNull: false 
    },
    postId: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    content: DataTypes.STRING,
    writer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};