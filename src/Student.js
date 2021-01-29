import { Component } from "react";

import "./styles.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false
    };
  }
  componentDidMount() {
    this.setState({
      score: this.props.score
    });
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  removescore() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score <= 342) {
          this.setState({ success: false });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;

    let text;
    if (isSuccess) {
      text = <span>Success</span>;
    } else if (!isSuccess) {
      text = <span>Fail</span>;
    } else {
      text = " ";
    }

    return (
      <div className="Student">
        <div className="left">
          <h2 className="studentName">
            {this.props.studentName}
            <button className="addScorebtn" onClick={() => this.addScore()}>
              +
            </button>
            <button className="addScorebtnm" onClick={() => this.removescore()}>
              -
            </button>
          </h2>
          <p className="universityName">
            {this.props.university} {text}
          </p>
        </div>
        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}
export default Student;
