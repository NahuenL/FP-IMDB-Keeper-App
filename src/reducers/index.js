const reducer = (state, action) =>{
    switch (action.type){
        case "SET_WATCHED" :
            return {
                ...state,
                watchedMovies: [...state.watchedMovies, action.payload],
            };
        case "DELETE_WATCHED" :
            return {
                ...state,
                watchedMovies: state.watchedMovies.filter(
                    (items) => items.data.id !== action.payload,
                )
            };
        case "SET_SECTION" :
            return {
                ...state,
                sectionActive: action.payload
            };
        default:
                return state;
    }
};

export default reducer;