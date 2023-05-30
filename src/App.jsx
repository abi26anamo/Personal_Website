import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Footer from "./components/Footer";
import Bot from "./components/Bot";
import Skill from "./components/Skills";
import Home from "./components/Home";
import Certificates from "./components/Certificates";

const App =()=>{
    return(
    <>
    <Navbar/>
    <Bot/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Certificates/>
    <Contact/>
    <Footer/>
    </>
    );
};

export default App;