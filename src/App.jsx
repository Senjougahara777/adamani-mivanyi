import "./App.css";
import "./index.js";
import About from "./components/About.jsx";
import Hero from "./components/hero.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Resume from "./components/resume.jsx";
import Project from "./components/projects.jsx";
import { Rocket } from "@mui/icons-material";
import { Route, Router } from
"react-router-dom"; 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Switch } from "@mui/material";
import { useState } from "react";


function App() {
  // state to manage the dark mode
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  // function to toggle the dark mode as true or false
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  // applying the primary and secondary theme colors
  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#ffffff',
      },
    },
  });
  return (
    <div id="flashlight">
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    
      <div className="md:flex lg:py-20 py-3 px-6 lg:px-40 justify-around bg-transparent">
        <div className="md:w-1/2 z-10 bg-transparent">
          <div className="md:w-full lg:fixed ">
          <div>
            <Switch checked={toggleDarkMode} onChange={toggleDarkTheme}/>
            </div>
            <Hero />
            
            <Navbar />
          </div>
        </div>

        <div className="md:w-1/2 z-10">
              <About/>
              <Resume/>
              <Project/>
            
          <Footer />
        </div>
        
      </div>
    
    </ThemeProvider>
    </div>
  );
}

export default App;
