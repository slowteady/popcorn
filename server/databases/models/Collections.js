const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  movieId: Number,
  poster_path: String,
  release_date: Date,
  title: String,
  vote_average: Number,
});

const collectionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  collectionTitle: String,
  movie: [movieSchema],
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
