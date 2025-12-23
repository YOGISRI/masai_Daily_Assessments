import { createContext } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
    const values = {
        a: "Apple",
        b: "Ball",
        c: "Cat",
        d: "Dog",
        e: "Elephant",
        f: "Fish"
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
}
