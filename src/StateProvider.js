import React, { createContext, useContext, useReducer } from "react";

// date layer
export const StateContext = createContext();

// build provider
export const StateProvider = ({ reducer, initalState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);