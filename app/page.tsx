"use client";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider, createTheme } from '@mui/material/styles';



const Home = () => {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#202124',
      },
      text: {
        primary: '#e8eaed',
      },
      background: {
        default: '#202124',
        paper: "#202124"
      },
    },
  });


  return(
    <>
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    </>
  );
}

export default Home
