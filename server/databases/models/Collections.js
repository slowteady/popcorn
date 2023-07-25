const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: Number,
  poster_path: String,
  release_date: Date,
  title: String,
  vote_average: Number,
});

const userSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: {
    type: mongoose.Schema.Types.String,
    ref: "User",
  },
});

const collectionSchema = new Schema({
  user: userSchema,
  collectionTitle: String,
  movie: [movieSchema],
  rgstDate: { type: Date, default: Date.now },
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
