"use client"
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"))
    };
    return (
        <ThemeContext.Provider value={{ mode, toggle }}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};
