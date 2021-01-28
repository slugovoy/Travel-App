// Packages and variables
let mongoose = require("mongoose");
let LogEntry = require("../models/LogEntry");

// Connection for Heroku and MongoDB Atlas
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/travelapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });
async function seeds() { 
let seed = [
  {
    title: "Albuquerque Zoo",
    description: "Something",
    rating: 5,
    latitude: 35.0781,
    longitude: -106.6632,
    visitDate: "2021-01-22T23:33:27.415Z",

  },
  {

    title: "Denver",
    description: "Something",
    rating: 5,
    latitude: 39.7392,
    longitude: -104.9903,
    visitDate: "2021-01-22T23:33:27.415Z",

  },
  {

    title: "Sacramento",
    description: "Something",
    rating: 5,
    latitude: 38.5816,
    longitude: -121.4944,
    visitDate: "2021-01-22T23:33:27.415Z",

  }
]

 await LogEntry.deleteMany({})
  .then(() => LogEntry.collection.insertMany(seed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
}

  module.exports = seeds();