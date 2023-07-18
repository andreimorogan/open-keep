"use client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useState, useContext } from 'react';

type ThemeProps = {
    children: React.ReactNode;
};

type ThemeContextProps = {
    isDarkTheme: boolean;
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
    toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
    isDarkTheme: true,
    setIsDarkTheme: () => { },
    toggleTheme: () => { }
});

const Theme: React.FC<ThemeProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

    const toggleTheme = () => {
        setIsDarkTheme(prev => !prev);
    };


    const theme = createTheme({
        palette: {
            mode: isDarkTheme ? 'dark' : 'light',
            primary: {
                main: '#902bf5',
            },
            secondary: {
                main: '#FFFFFF',
            },
            background: {
                default: isDarkTheme ? '#202124' : '#f5f5f5',
                paper: isDarkTheme ? '#202124' : '#fff',
            },
            text: {
                primary: isDarkTheme ? '#E8EAED' : '#000',
                secondary: isDarkTheme ? '#bdbdbd' : '#616161',
            },
        },
    });


    const contextValue: ThemeContextProps = {
        isDarkTheme,
        setIsDarkTheme,
        toggleTheme
    };
    

    return (
        <ThemeContext.Provider value={contextValue}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Theme;
