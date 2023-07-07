"use client";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

type ThemeProps = {
    children: React.ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(true);
    
    const theme = createTheme({
        palette: {
            mode: isDarkTheme ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default Theme;
