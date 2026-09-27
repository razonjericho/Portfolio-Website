import React from "react";
import Header from "./components/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import TechStack from "./sections/TechStack/TechStack";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Project from "./sections/Project/Project";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Button, Card, CardContent, Typography, Container, Toolbar } from "@mui/material";

function App() {

  return (
    <div className="App">
      <Header />
      <Toolbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
    
  )
}

export default App;
