const { Post } = require('../models');

const _POST = [
  {
    "id": 1,
    "title": "How to Find the Right Tech Jobs for You",
    "description": "Network, network, network!",
    "user_id": 1
  },
  {
    "id": 2,
    "title": "What is Handlebars?",
    "description": "Handlebars is one of the most used templating engines for web applications “competing” with other well-known ones like Mustache js, Pug, EJS and others. It's especially used on the server side along with the express js framework.",
    "user_id": 2
  },
  {
    "id": 3,
    "title": "I just started coding",
    "description": "What are your suggestions for a successful bootcamp?",
    "user_id": 3
  }
]

const seedPost = () => Post.bulkCreate(_POST);
module.exports = seedPost;
