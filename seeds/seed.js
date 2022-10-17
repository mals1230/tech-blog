const sequelize = require("../config/connection");
const seedUser = require("./userData");
const postData = require("./postData");
const commentData = require("./commentData");

// const { Post, Comment } = require('../models');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
    console.log("User is seeded");
 
  await postData();
      console.log("Post is seeded");

  await commentData();
    console.log("Comment is seeded");

    process.exit(0);
  };

seedAll()
