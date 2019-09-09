import React, { Component } from 'react';
import GameHeader from "./components/GameHeader";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  state = {
      characters,
      score: 0,
      topScore: 0,
      message: "Click a character to begin!"
  };

  handleClick = (id, clicked) => {
    console.log(this.state);

      const charImg = this.state.characters;
    console.log(clicked);
      if (clicked) {
          charImg.forEach((character, index) => {
              charImg[index].clicked = false;
          });
          return this.setState({
          //Math.random returns a random number between 0 and 1. So if it happens to give you a number less then 0.5 then you get a negative number and if it’s over that then you get a positive.
              character: charImg.sort(() => Math.random() - 0.5),
              message: "You Guessed Wrong!",
              score: 0
          })
      }
      else {
          charImg.forEach((character, index) => {
            console.log(id, character.id, id === character.id);
              if (id === character.id) {
                  charImg[index].clicked = true;
                  console.log("got it");
              }
          });

          var {topScore, score} = this.state;
          var newScore = score + 1;
          var newTopScore = newScore > topScore ? newScore: topScore;

          return this.setState({
              character: charImg.sort(() => Math.random()- 0.5),
              message: "You Guessed Correctly!",
              score: newScore,
              topScore: newTopScore,
          })
      }
  };

  render() {
      return (
        <div className="container-fluid main-container">
          <GameHeader />
            <div className="container-fluid game-container">
                  <div className="game-message text-center">
                      <p>{this.state.message}</p>
                  </div>
                  <div className="game-score text-center">
                      <p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                  </div>

              <div className="container">
                  <div className="row">

                      {this.state.characters.map(character => (
                          <CharacterCard
                              key={character.id}
                              id={character.id}
                              name={character.name}
                              clicked={character.clicked}
                              image={character.image}
                              handleClick={this.handleClick}
                          />
                      ))}

                  </div>
              </div>
          </div>
        </div>
      );
  }
};

export default App;
