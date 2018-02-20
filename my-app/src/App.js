import React, { Component } from 'react';
import Container from "./components/Container";
import Row from "./components/Row";
import Col from "./components/Col";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



const App = () =>
    <div>
            <Navbar />
                <Hero backgroundImage="./public/halftone-yellow.png">
                    <h1>Clicky Game</h1>
                 </Hero>
     
    </div>

export default App;