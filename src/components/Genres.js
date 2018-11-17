import React from 'react';
import { getGenres, getGenreMovies } from '../thunks';
import { setGenres } from '../actions';
import { connect } from 'react-redux';


class Genres extends React.Component {
  constructor(props) {
    super(props);


    this.props.onGetGenres();
  }

  render() {
    const { genresList, addLog } = this.props;

    return (
      <div className="genres">
        {genresList.map((genre) => (
          <div key={genre.id} className="genre" onClick={() => {
              addLog(`Pakeistas zanras i ${genre.name}`);
              this.props.onGetGenreMovies(genre.id);
          }}>
            {genre.name}
          </div>
        ))}
      </div>
    );
  }
}

export default connect(
    // function to get data from redux store to this components props
    (state) => {
        return {
          genresList: state.genres.list,
        };
    },
    // function to pass action callers to this components props
    (dispatch) => {
        return {
            onSetGenres: (genres) => dispatch(setGenres(genres)),
            onGetGenres: () => dispatch(getGenres()),
            onGetGenreMovies: (id) => dispatch(getGenreMovies(id))
        };
    },
)(Genres);

