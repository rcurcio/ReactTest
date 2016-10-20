import { registerReducer } from '../utils/DuxUtils';
var restUtils = require('superagent');

// General purpose store.
// TODO look into 3REE Stack ( React + Redux RethinkDB + Express.js)

// Normally we would grab/ store this data through our backend and b/w a REST/GraphQL layer.

const matches = [];
const expressPort = 3001;
const expressServer = 'http://localhost:' + expressPort;

const getMatchData = () => {
    var data = [];
    restUtils
        .get(expressServer + '/games')
        .end(function(err, res) {
            if (!err) {
                data = JSON.parse(res.text);
            } else {
                console.log(err);
            }
            console.log('data', data);
            return data;
        });
}

const insertMatch = (matchPayload) => {
    restUtils
        .post(expressServer + '/games')
        .send(matchPayload)
        .end(function(err, res) {
            if (!err) {
            } else {
                console.log(err);
            }
        });
}

export const getMatches = () => {
    
    var data = [];
    restUtils
        .get(expressServer + '/games')
        .end(function(err, res) {
            if (!err) {
                data = JSON.parse(res.text);
            } else {
                console.log(err);
            }
            console.log('data', data);
            return data;
        });
    return {
        type: 'GET_MATCHES',
        data: getMatchData(),
        completed: true,
    };
};

export const addMatch = (matchPayload) => {
    return {
        type: 'ADD_MATCH',
        data: insertMatch(matchPayload),
        completed: false,
    };
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
            console.log('Action data: ', action.data);
            return { ...state, matches: action.data, completed:true};
        }
        case 'ADD_MATCH': {
            let newMatches = matchParser(action.matchPayload);
            return { ...state, matches: action.data, completed:true};
        }
        default:
            return state;
    }
};

registerReducer({game: reducer});
