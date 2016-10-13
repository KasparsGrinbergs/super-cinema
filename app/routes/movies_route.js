import express      from "express";
import { Movie }    from "../db_models";

// Route "/api/movies"

let router = express.Router();

router.route("/")
  // Return all movies
  .get(function(req, res) {
    Movie.find((err, movies) => {
      res.json(movies);
    });
  });


//export default router;
module.exports = router;