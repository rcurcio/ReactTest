import { registerReducer, defaultAsyncHandler } from '../utils/DuxUtils';
var restUtils = require('superagent');

// General purpose store.


const expressPort = 3001;
const expressServer = 'http://localhost:' + expressPort;

export const addMatch = (matchPayload) => {
	return (dispatch) => {
		dispatch({type: 'ADD_MATCH'})
		restUtils.post(expressServer + '/games').send(matchPayload).end(
            defaultAsyncHandler(
                dispatch,
                'ADD_MATCH_FAIL',
                'ADD_MATCH_OK',
            )
		)


	}
}

export const getMatches = () => {
	return (dispatch) => {
		dispatch({type: 'GET_MATCHES'})
		restUtils.get(expressServer + '/games').end(
				defaultAsyncHandler(
					dispatch,
					'GET_MATCHES_FAIL',
					'GET_MATCHES_OK'
				)
		);
	}
};


export const INITIAL_STORE = {
    matches: [],
};


export const reducer = (state = INITIAL_STORE, action) => {

console.log(action);

    switch (action.type) {
        case 'GET_MATCHES': {
            return { ...state, completed:false};
        }
        case 'GET_MATCHES_OK': {
            return { ...state, error: false, status: action.data.status, matches: action.data.body, completed:true};
        }
        case 'GET_MATCHES_FAIL': {
            return { ...state, error: true, status: action.data.status, completed:true};
        }
        case 'ADD_MATCH': {
            return { ...state, error: false, completed:false};
        }
        case 'ADD_MATCH_OK': {
            // TODO mutate store to add new resulting match.
            return { ...state, error: false, completed:true};
        }
        case 'ADD_MATCH_FAIL': {
            return { ...state, error: true, status: action.data.status, completed:true};
        }
        default:
            return state;
    }
};

registerReducer({game: reducer});
