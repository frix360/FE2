import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import Genres from './Genres';
import {getMovies} from '../thunks';
import {addHearted, addLog, removeHearted, setMovies} from '../actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        props.onGetMovies();
    }

    componentDidMount() {
        this.props.onAddLog('Aplikacija uzkrauta')
    }

    render() {
        const {movieList, hearted, onAddHearted, onRemoveHearted, onAddLog} = this.props;


        return (
            <React.Fragment>
                <Genres addLog={onAddLog}/>

                <div className="cards">
                    {movieList.map((movie) => (
                        <Card
                            key={movie.id}
                            addHearted={onAddHearted}
                            removeHearted={onRemoveHearted}
                            isHearted={hearted.includes(movie.id)}
                            movie={movie}
                            addLog={onAddLog}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default connect(
    // function to get data from redux store to this components props
    (state) => {
        return {
            movieList: state.movies.list,
            hearted: state.movies.hearted
        };
    },
    // function to pass action callers to this components props
    (dispatch) => {
        return {
            // onSetMovies - simplest way to pass data to store
            onAddHearted: (id) => dispatch(addHearted(id)),
            onRemoveHearted: (id) => dispatch(removeHearted(id)),
            onSetMovies: (movies) => dispatch(setMovies(movies)),
            onGetMovies: () => dispatch(getMovies()),
            onAddLog: (log) => dispatch(addLog(log))
        }
    }
)(App);
