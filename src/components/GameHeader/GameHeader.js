import React from "react";
import "./GameHeader.css";

const GameHeader = () => (
    <div className="jumbotron-fluid game-header">
        <div className="container text-center">
            <h1 className="title">Clicky Game: DC Comics</h1>
            <p className="instructions">
                Click on any character t earn points, but don't click on any character more than once!
            </p>
        </div>
    </div>
)
export default GameHeader;
