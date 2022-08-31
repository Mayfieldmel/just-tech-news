const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;

// comments:
// [
//   {
// 		"comment_text": "squeak squeak",
// 		"user_id": 2,
// 		"post_id": 2
//   },
//   {
//     "comment_text": "quack quack",
//     "user_id": 3,
//     "post_id": 1
//   },
//   {
//     "comment_text": "very nice",
//     "user_id": 1,
//     "post_id": 1
//   }
// ]