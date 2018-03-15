import React from "react";
import "./Navbar.css"
import Col from "../Col";
import Row from "../Row";
import Wrapper from "../Wrapper";



const Navbar = (props) =>
    <nav className= "navbar navbar-default">
        <div className="container-fluid">
        <div className="navbar-header">
         
            <Wrapper>
                <Row>
                <Col size="5">
                    <h3>Click an Image to begin</h3>
                </Col>
                <Col size="5">
                    <h3>Score: {props.correctGuess} | Top Score: {props.topScore}</h3>
                </Col>
                </Row>
            </Wrapper>
        
        </div>
        </div>
    </nav>;

    export default Navbar;