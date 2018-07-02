const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/codeforumDB",
  {
    useMongoClient: true
  }
);

const posts = [
    {
        title: "Not sure how to seed multiple collections",
        tags: ["mongoose", "mongodb", "react"],
        stars: 25,
        description: "Where do I start?",
        comments: ["first comment", "second comment"],
        created: new Date(Date.now()),
        postId: 5
    },
    {
        title: "gitHub acquired by Microsoft",
        tags: ["gitHub", "news"],
        stars: 2300,
        description: "Microsoft has acquired GitHub, looks to grow VS Code",
        comments: ["first comment", "second comment"],
        created: new Date(Date.now()),
        postId: 6
    },
    {
        title: "Should I build my app with React or Angular?",
        tags: ["angular", "react"],
        stars: 47,
        description: "Please help me choose, my app gather weather and location data.",
        comments: ["first comment", "second comment"],
        created: new Date(Date.now()),
        postId: 7
    },
    {
        title: "Is it better to use a relational database for a 2D Game webapp?",
        tags: ["mongodb", "MySQL"],
        stars: 25,
        description: "What are some of the pros/cons of MySQL? ",
        comments: ["first comment", "second comment"],
        created: new Date(Date.now()),
        postId: 8 
    },
    {
        title: "Potential manager has issues viewing my codebase on GitHub",
        tags: ["gitHub", "job search"],
        stars: 25,
        description: "He can only view my files",
        comments: ["first comment", "second comment"],
        created: new Date(Date.now()),
        postId: 9
    }

];

const users = [
    {
        username: "sadeq",
        email: "abc@gmail.com",
        created: new Date(Date.now())
    },
    {
        username: "antMan",
        email: "antMan@gmail.com",
        created: new Date(Date.now())
    },
    {
        username: "MrStark",
        email: "mrStark@gmail.com",
        created: new Date(Date.now())
    },
    {
        username: "tina1990",
        email: "tinaCarter@gmail.com",
        created: new Date(Date.now())
    },
    {
        username: "bearGryllsYou",
        email: "bearGrylls@gmail.com",
        created: new Date(Date.now())
    }
];

db.User
  .remove({})
  .then(() => db.codeForum.collection.insertMany(posts))
  .then(data => {
      // not sure about this: 
    console.log(data.insertedIds.length + " posts have been inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// add joins for comments and posts to user. 