const sequelize = require('../config/connection');
const { Post, Comment } = require('../models');

const seedUser = require('./userData.json');
const seedPost = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await seedUser();
  console.log("User is seeded");
 
  const posts = []
  for (const post of seedPost) {
      const tempPost = await Post.create({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
      posts.push (tempPost)
      console.log("Post is seeded");

  for (const comment of commentData) {
    await Comment.create({
      ...comment,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        post_id: posts[Math.floor(Math.random() * posts.length)].id,
     });
   }
    console.log("Comment is seeded");
    process.exit(0);
  };
}

seedDatabase();
