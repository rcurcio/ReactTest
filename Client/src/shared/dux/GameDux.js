import { registerReducer } from '../utils/DuxUtils';

// General purpose store.
// TODO look into 3REE Stack ( React + Redux RethinkDB + Express.js)

// Normally we would grab/ store this data through our backend and b/w a REST/GraphQL layer.

const matches = [];

const getMatchData = () => {
    return JSON.parse(JSON.stringify(matches));
}

export const getMatches = () => {
    return {
        type: 'GET_MATCHES',
        data: getMatchData(),
        completed: false,
    }
};

export const addMatch = (matchPayload) => {
    return {
        type: 'ADD_MATCH',
        matchPayload,
        completed: false,
    }
};

export const INITIAL_STORE = {
    matches: [],
};

export const matchParser = (matchPayload) => {
     matches.push(matchPayload);
     let allMatches = JSON.parse(JSON.stringify(matches));
     return allMatches;
};

export const reducer = (state = INITIAL_STORE, action) => {
    switch (action.type) {
        case 'GET_MATCHES': {
            return { ...state, matches: action.data, completed:true};
        }
        case 'ADD_MATCH': {
            let newMatches = matchParser(action.matchPayload);
            return { ...state, matches: newMatches, completed:true};
        }
        default:
            return state;
    }
};

registerReducer({game: reducer});