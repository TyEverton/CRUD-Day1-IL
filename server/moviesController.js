const movies = require('./db.json')

let id = 11;

module.exports = {
  getAllMovies: function(req, res) {
    res.status(200).send(movies)
  },
  deleteMovie: function(req, res) {
      // console.log(req.params.movieId)

      const targetIndex = movies.findIndex(function(movieObj) {
        return movieObj.id === +req.params.movieId
      })


      movies.splice(targetIndex, 1)

      res.status(200).send(movies)
  },

  createMovie: function(req, res) {
    const { title, rating, imageUrl } = req.body

    const newMovie = {
      id,
      title,
      rating,
      imageUrl
    }

    movies.push(newMovie)
    id++;

    res.status(200).send(movies)
  }
}

