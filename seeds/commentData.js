const { Comment } = require('../models');

const commentData = [
    {
      "userComment": "Interesting!",
      "post_id": 2,
      "user_id": 3
    },
    {
      "userComment": "Best of luck!",
      "post_id": 3,
      "user_id": 1
    },
    {
      "userComment": "Love this post",
      "post_id": 1,
      "user_id": 2
    }
  ]
  
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;