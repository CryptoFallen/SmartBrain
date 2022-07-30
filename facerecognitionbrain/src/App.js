import React, { Component } from "react";
import Particle from "./components/Particles/Particle";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Particle className="particles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* 
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
