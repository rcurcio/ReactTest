// Redux shared utilities

let reducers = {};

export const registerReducer = (newReducers) => {
    reducers = { ...reducers, ...newReducers};
};

export const getReducers = () => {
    return { ...reducers };
};

export const defaultAsyncHandler = (dispatch, failAction, okAction) => {
	return (err, data) => {
		if (err) {
			dispatch({type: failAction, data});
		} else {
			dispatch({type: okAction, data});
		}
	};
};