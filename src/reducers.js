import {combineReducers} from 'redux';
import moment from 'moment'

// initial state for when state isn't present to have a fallback solution
const moviesInitialState = {
    list: [],
    hearted: [],
};

const genresInitialState = {
    list: [],
};

const logsInitialState = {};

const moviesReducer = (state = moviesInitialState, action) => {
    // reducer - always return NEW state, no functionality can be done here
    switch (action.type) {
        case 'SET_MOVIES':
            return {...state, list: action.movies};
        case 'ADD_HEARTED':
            return {...state, hearted: [...state.hearted, action.hearted]};
        case 'REMOVE_HEARTED':
            return {...state, hearted: state.hearted.filter(item => item !== action.hearted)};

        default:
            return state;
    }
};

const genresReducer = (state = genresInitialState, action) => {
    // reducer - always return NEW state, no functionality can be done here
    switch (action.type) {
        case 'SET_GENRES':
            return {...state, list: action.genres};
        default:
            return state;
    }
};

const logsReducer = (state = logsInitialState, action) => {
    switch (action.type) {
        case 'ADD_LOG':
            return {...state, [moment().format('YYYY-MM-DD HH:mm:ss')]: action.log};
        default:
            return state;
    }
};

// rootReducer - connect multiple reducers here
export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    logs: logsReducer
});
