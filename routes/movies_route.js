import express      from "express";
import { Movie }    from "../app/db_models";

let router = express.Router();

router.route("/")
  // Get all movies from /api/movies endpoint
  .get(function(req, res) {
    Movie.find((err, movies) => {
      res.json(movies);
    });
  });

module.exports = router;