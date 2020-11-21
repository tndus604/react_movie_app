import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const data = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    const movies = data.data.data.movies;
    this.setState({ movies: movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                url={movie.torrents[1].url}
                genres={movie.genres}
              />
          )
        )}
      </div>
    );
  }
}


export default App;
