import React, { Component } from 'react';
import ParticlesOptions from './components/ParticlesOptions';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Tachyons from 'tachyons';
import './App.css';

//Api Key  here from https://clarifai.com/
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
        <ParticlesOptions className ='particles'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
           />
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;

