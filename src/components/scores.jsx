import React, { Component } from "react";

export class Score extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: true,
      bingo: false,
      bango: false,
      bongo: false,
      saved: false,
      score: 0,
    };
  }

  addToScore = (e) => {
    let x = e;
    this.setState((prevState) => ({ [x]: !prevState[x], saved: false }));
  };

  sendScore = () => {
    this.setState({ saved: true });
    let a = 0;
    let b = 0;
    let c = 0;

    if (this.state.bingo === true) {
      a = 1;
    }

    if (this.state.bango === true) {
      b = 1;
    }

    if (this.state.bongo === true) {
      c = 1;
    }

    let score = a + b + c;
    this.props.getScore(score, this.props.holes);
  };

  render() {
    return (
      <div className="hole-container">
        <div className="hole-number">
          Hole {this.props.holes + 1}
          <span>
            <i
              onClick={this.sendScore}
              className={
                this.state.saved
                  ? "check circle green icon"
                  : "check circle icon"
              }
            ></i>
          </span>
        </div>
        <div className="hole-buttons">
          <div
            onClick={() => this.addToScore("bingo")}
            className={this.state.bingo ? "hole-btn selected" : "hole-btn"}
          >
            Bingo
          </div>
          <div
            onClick={() => this.addToScore("bango")}
            className={this.state.bango ? "hole-btn selected" : "hole-btn"}
          >
            Bango
          </div>
          <div
            onClick={() => this.addToScore("bongo")}
            className={this.state.bongo ? "hole-btn selected" : "hole-btn"}
          >
            Bongo
          </div>
        </div>
      </div>
    );
  }
}
export default Score;
