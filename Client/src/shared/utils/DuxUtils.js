// Redux shared utilities

let reducers = {};

export const registerReducer = (newReducers) => {
    reducers = { ...reducers, ...newReducers};
};

export const getReducers = () => {
    return { ...reducers };
};
