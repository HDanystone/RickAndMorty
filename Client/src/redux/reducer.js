import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ADD_CHAR, REMOVE_CHAR, PREV, NEXT, FAVPREV, FAVNEXT } from './actionTypes.js';
const initialState = {
    myFavorites: [],
    allCharacters: [],
    allFavorites: [],
    numPag: 0,
    favNumPag: 0
}
export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_CHAR:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload]
            };
        case REMOVE_CHAR:
            const newCharacters = state.allCharacters.filter((personaje) => personaje.id !== payload);
            return { ...state, allCharacters: newCharacters };
        case ADD_FAV:
            return {
                ...state, myFavorites: [...state.myFavorites, payload],
                allFavorites: [...state.allFavorites, payload]
            };
        case REMOVE_FAV:
            const newFavorites = state.myFavorites.filter((personaje) => personaje.id !== payload);
            return {
                ...state, myFavorites: newFavorites
                , allFavorites: newFavorites
            };
        case FILTER:
            const filtrados = state.allFavorites.filter((personaje) => personaje.gender === payload);
            return {
                ...state, myFavorites: filtrados
                , favNumPag: (filtrados.length > 0) ? 1 : 0
            }
        case ORDER:
            const ordenados = state.allFavorites.sort((a, b) => {
                if (payload === "A") return a.id - b.id;
                if (payload === "D") return b.id - a.id;
            });
            return { ...state, myFavorites: ordenados }
        case PREV:
            return {
                ...state,
                numPag: state.numPag - 1,
            };

        case NEXT:
            return {
                ...state,
                numPag: state.numPag + 1,
            };
        case FAVPREV:
            return {
                ...state,
                favNumPag: state.favNumPag - 1,
            };

        case FAVNEXT:
            return {
                ...state,
                favNumPag: state.favNumPag + 1,
            };
        default:
            return state; // caso por defecto
    }
}


