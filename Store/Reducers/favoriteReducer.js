const initialState = {favoritesFilm: []}

function toggleFavorite(state = initialState,action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
            const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id == action.value.id)
            if (favoriteFilmIndex != -1){
                //supression
                nextState = {
                    ...state,
                    favoritesFilm: state.favoritesFilm.filter((item,index)=> index!==favoriteFilmIndex)
                }
            } else {
                //ajouter le film
                nextState = {
                    ...state,
                    favoritesFilm:[...state.favoritesFilm,action.value]
                }
            }
            return nextState || state   //renvoie nextState s'il n'est pas undefined et l'ancien state sinon
            break;
    
        default:
            return state
            
    }
}

export default toggleFavorite