function solve(input) {
    let movies = [];
    for (let string of input) {
      if(string.includes('add movie')) {
          let tokens = string.split(`add movie `);
          let movieName = tokens[1];
          addMovie(movieName);
      } else if(string.includes('directed by')) {
          let tokens = string.split(` directed by `);
          let movieName = tokens[0];
          let directorName = tokens[1];
          addDirector(movieName, directorName);
      } else {
          let tokens = string.split(` on date `);
          let movieName = tokens[0];
          let date = tokens[1];
          addDate(movieName, date);
      }
        
    }

    function addMovie(movieName) {
        movies.push({name: movieName, director: '', date:''});
    }

    function addDirector(movieName, directorName) {
        let foundMovie = movies.find(m => m.name === movieName);
        if(foundMovie) {
            foundMovie.director = directorName;
        }
    }

    function addDate(movieName, date) {
        let foundMovie = movies.find(m => m.name === movieName);
        if(foundMovie) {
            foundMovie.date = date;
        }
    }
    for (let movie of movies) {
        if(movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    }
}

solve([
'add movie Fast and Furious',
'add movie Godfather',
'add movie Inception',
'Inception directed by Christopher Nolan',
'Godfather directed by Francis Ford Coppola',
'Godfather on date 29.07.2018',
'Fast and Furious on date 30.07.2018',
'Batman on date 01.08.2018',
'Fast and Furious directed by Rob Cohen']
)