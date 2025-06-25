import React, { createContext, useContext, useState } from "react";

const GlobalState = createContext();

function GlobalSateProvider({ children }) {
    const [user, setUser] = useState("Mahadev")
    return (
        <GlobalState.Provider value={user}>
            {children}
        </GlobalState.Provider>
    )
}

export const useGlobalState = () => {
    const context = useContext(GlobalState);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

export default GlobalSateProvider