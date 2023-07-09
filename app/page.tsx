"use client";

import { ThemeContext } from "@/components/Theme";
import { Switch } from "@mui/material";
import { useContext } from "react";

const Home = () => {

  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setIsDarkTheme(prev => !prev);
  };


  return(
    <>
      <Switch onClick={handleThemeToggle} value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
    </>
  );
}

export default Home
