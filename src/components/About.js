import React, { createContext, Component } from "react";
import Picture from "./Picture";
import Collapse from "@kunukn/react-collapse";

class About extends Component {
  state = {
    openIndex: 1
  };

  handleClick = index => {
    const { openIndex } = this.state;
    this.setState({ openIndex: openIndex === index ? -1 : index });
  };
  render() {
    const { openIndex } = this.state;
    return (
      <div className="main about">
        <a onClick={() => this.handleClick(1)}>info 1</a>
        <Collapse isOpen={openIndex === 1}>Important info 1</Collapse>
        <a onClick={() => this.handleClick(2)}>info 2</a>
        <Collapse isOpen={openIndex === 2}>Important info 2</Collapse>
        <Picture />
        <div className="about-text">About</div>
      </div>
    );
  }
}
//const About = () => (
//<div className="main about">
//<Picture />
//<div className="about-text">About</div>
//</div>
//);

export default About;
