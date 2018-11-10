import React from 'react';
import Card from './Card';
import axios from 'axios';
import { endpoints } from '../../config';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      genresList: [],
      likedMoviesIds: []
    }
  }

  componentDidMount() {
    this.requestPopularMovies();
    this.requestMovieGenres();
  }

  requestPopularMovies = () => {
    axios
      .get(endpoints.mostPopularMovies())
      .then((response) => {
        this.setState({
          movieList: response.data.results,
        });
      })
      .catch((error) => console.log(error.response));
  };

  render() {
    const { movieList, genresList } = this.state;

    return (
      <React.Fragment>
        {genresList.map((genre) => (
            <a style={{textDecoration: 'none', color: 'white'}} href="#" onClick={() => this.requestMoviesByGenre(genre.id)}>{genre.name + " "}</a>
        ))}
        {movieList.map((movie) => (
          <Card onMovieLikedStateChange={this.handleLikedMovieStateChange.bind(this)} wasLiked={this.state.likedMoviesIds.includes(movie.id)} key={movie.id} data={movie} />
        ))}
      </React.Fragment>
    );
  }

    requestMovieGenres() {
        axios
            .get(endpoints.genres())
            .then((response) => {
                this.setState({
                    genresList: response.data.genres,
                });
            })
            .catch((error) => console.log(error.response));
    }

    requestMoviesByGenre(id) {
        axios
            .get(endpoints.genreMovies(id))
            .then((response) => {
                this.setState({
                    movieList: response.data.results,
                });
            })
            .catch((error) => console.log(error.response));
    }

    handleLikedMovieStateChange(movieId, liked) {
      console.log(liked);
      if (this.state.likedMoviesIds.includes(movieId) && liked === false) {
          this.setState({
              likedMoviesIds: this.state.likedMoviesIds.filter(id => id !== movieId )
          });
      }
      else if (liked === true) {
          this.setState(state => ({
              likedMoviesIds: [...state.likedMoviesIds, movieId]
          }))
      }
    }
}

export default App;
