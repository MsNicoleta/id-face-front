import React, { Component } from 'react';
// import ParticlesBg from 'particles-bg'
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import Tachyons from 'tachyons';
// import ParticlesOptions from './ParticlesOptions';

// const app = new Clarifai.App({
//   apiKey: 'b932a3c738a4e18a7eec11b756509e5'
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input:'',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmit = () => {
    console.log('click');
  }

    render(){
    return (
      <div className="App">
        {/* <ParticlesOptions/> */}
        {/* <ParticlesBg type="circle" bg={true} /> */}
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;

