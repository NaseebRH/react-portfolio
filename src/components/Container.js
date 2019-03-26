import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Contact from "./Contact";
import About from "./About";
import Skills from "./Skills";
import button from "./Button";

class Container extends Component {
  state = {
    aboutIsVisible: true
  };

  handleChange = () => {
    this.setState({
      aboutIsVisible: !this.state.aboutIsVisible
    });
  };
  render() {
    const { aboutIsVisible } = this.state;
    return (
      <div className="container">
        <button onClick={() => this.handleChange()}>Toggle about</button>
        <Header />
        {aboutIsVisible && <About />}
        <Skills />
        <Contact phoneNumber="01743469362" email="naseeb.rh@gmail.com" />
      </div>
    );
  }
}

export default Container;