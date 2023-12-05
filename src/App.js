import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Education from "./Components/Education";
import Game from "./Components/Game";


function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skill" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
