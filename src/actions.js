export const setMovies = (movies) => {
  // action - always return only object with data, no functionality can be done here
  return {
    type: 'SET_MOVIES',
    movies,
  };
};

export const addHearted = (hearted) => {
    // action - always return only object with data, no functionality can be done here
    return {
        type: 'ADD_HEARTED',
        hearted,
    };
};

export const removeHearted = (hearted) => {
    // action - always return only object with data, no functionality can be done here
    return {
        type: 'REMOVE_HEARTED',
        hearted,
    };
};

export const setGenres = (genres) => {
    return {
      type: 'SET_GENRES',
      genres
    }
};

export const addLog = (log) => {
    // action - always return only object with data, no functionality can be done here
    return {
        type: 'ADD_LOG',
        log
    };
};
