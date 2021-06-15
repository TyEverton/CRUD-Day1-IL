const express = require('express')
const app = express()
const cors = require('cors')
const moviesController = require('./moviesController.js') //do not always need the .js if they are javascript files, node automatically assumes it as so

const { getAllMovie, deleteMovie, createMovie } = moviesController
// console.log(moviesController)



app.use(express.json())//middleware - runs between a quest happening and a request fulfilling// express.json parses every body out of every single request, then if there is a parse it gives us access to the body
app.use(cors()) //

app.get('/api/movies', moviesController.getAllMovies) // getting the controller function from moviesController

app.delete('/api/movies/:movieId', deleteMovie) //connects to the deleteMovie function inside of the controller

app.post('./api/movies/', createMovie) //connects to the createMOvie function inside of the controller

const SERVER_PORT = 4004 //creates variable for server

app.listen(SERVER_PORT, function() {
  console.log(`Your server has left the planet and is currently in orbit, running on ${SERVER_PORT}!`)
}) //listens for the variable server then runs the function to say that its running in the console

