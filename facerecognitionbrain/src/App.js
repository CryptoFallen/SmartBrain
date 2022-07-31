import React, { Component } from "react";
import Particle from "./components/Particles/Particle";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";



class App extends Component {
  constructor() {
    super();
    this.stat = {
      input: '',
    }
  }

  // Create an type listener called 'onInputChange' to be used with ImageLinkForm
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  
  // Create an button click listener called 'onButtonSubmit' to be used with ImageLinkForm
  onButtonSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <Particle className="particles"/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        />
        {/* 
        <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
