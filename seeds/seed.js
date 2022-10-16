const sequelize = require("../config/connection");
const seedUser = require("./userData");
const postData = require("./postData");
const commentData = require("./commentData");

const { Post, Comment } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  console.log("User is seeded");
 
  await postData();
  // for (const post of postData) {
  //     const tempPost = await Post.create({
  //       ...post,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //     });
  //     posts.push (tempPost)
      console.log("Post is seeded");

  await commentData();
  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //       user_id: users[Math.floor(Math.random() * users.length)].id,
  //       post_id: posts[Math.floor(Math.random() * posts.length)].id,
  //    });
  //  }
    console.log("Comment is seeded");
    process.exit(0);
  };

seedAll()
