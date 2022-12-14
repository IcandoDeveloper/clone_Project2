'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Posts.belongsTo(models.Users, {
        foreignKey: 'userId',
      });
      models.Posts.hasMany(models.Comments, {
        foreignKey: 'postId',
      });
      models.Posts.belongsToMany(models.Users, {
        through: 'Likes',
        foreignKey: 'postId',
      });
    }
  }
  Post.init(
    {
      postId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      writer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Posts',
    }
  );
  return Post;
};
