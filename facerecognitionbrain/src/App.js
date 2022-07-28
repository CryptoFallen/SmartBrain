import React, { Component } from 'react'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

// const particleOptions = {
//   particles: {
//     line_linked: {
//       shadow: {
//         enabled: true,
//         color: '#3CA9D1',
//         blur: 5
//       }
//     }
//   }
// }

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <Particles className='particles'
         params={particleOptions}
        /> */}
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