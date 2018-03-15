// import React from 'react';
import Wrapper from "./components/Wrapper";
// import Row from "./components/Row";
// import Col from "./components/Col";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
// import Col from "./components/Col";
import Row from "./components/Row";
import Card from "./components/Card";
import Footer from "./components/Footer";
import characters from "./characters.json";
import Container from "./components/Container";


let correctGuess = 0;
let topScore = 0;

class App extends Component {
    state = {
        characters,
        correctGuess,
        topScore

    };




setClicked = id => {
    const characters = this.state.characters;

    const clickedChar = characters.filter(character => character.id === id);

    if (clickedChar[0].clicked){
        console.log("Correct Guesses: " + correctGuess);
        console.log("Top Score: " + topScore);

        correctGuess = 0;

        for (let i = 0 ; i < characters.length ; i++){
            characters[i].clicked = false;
        }

        this.setState({ correctGuess });
        this.setState({ characters });

    } else if (correctGuess < 11) {
        clickedChar[0].clicked = true;

        correctGuess ++;

        if (correctGuess > topScore){
            topScore = correctGuess;
            this.setState ({ topScore });
        }

        characters.sort(function(a, b){return 0.5 - Math.random()});

        this.setState({ characters });
        this.setState({correctGuess});
    } else {
        clickedChar[0].clicked = true;
        correctGuess = 0;
        topScore = 12;
        this.setState({ topScore});

        for (let i = 0 ; i < characters.length ; i++){
            characters[i].clicked = false;
        }

        characters.sort(function(a, b){return 0.5 - Math.random()});

        this.setState ({ characters });
        this.setState({correctGuess});
    }
};

render () {
    return (
        <Wrapper>
            <Navbar>
                <h1 className="title">The Anchorman Clicky Game!</h1>
            </Navbar> 
                <Hero> 
                    <h1>The Clicky Game!</h1>
                    <h3>Correct Guesses : {this.state.correctGuess}</h3>
                    <h3>Top Score : {this.state.topScore}</h3>
                </Hero>
                <Container>
                {/* <Row> */}
                    <div className="boardGame" style={{ margin: "20px;", width: "700px", height: "700px"}}>                     {this.state.characters.map(character => (
                        <Card
                        setClicked ={this.setClicked}
                        id={character.id}
                        key={character.id}
                        image={character.image}
                        />
                    ))}
                    </div>
                {/* </Row> */}
                </Container>
                <Footer />
                
            </Wrapper>
            
        );
    }
};  

export default App;

