import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      
      <NavBar />
      <Banner />
      <Skills />
      <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      <Projects />
      <Contact />
      <Footer />
      
    </div>
     </ThemeContext.Provider>
  );
}

export default App;
