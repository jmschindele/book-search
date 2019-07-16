const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Shrek: Triple the Trouble",
    authors: ["Catherine Hapka"],
    description: 'Picking up where the Shrek the Third movie left off, Donkey and Puss In Boots agree to baby-sit for Shrek and Fiona\'s three ogre babies, who prove to be quite rambunctious. Original.',
    image: 'http://books.google.com/books/content?id=yLyJc-pSAHIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    link: 'http://books.google.com/books?id=yLyJc-pSAHIC&dq=shrek&hl=&source=gbs_api',
    date: new Date(Date.now())
  }
];

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
