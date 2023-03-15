import React, { Component } from 'react';
import ParticlesOptions from './components/ParticlesOptions';
// import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Tachyons from 'tachyons';
import './App.css';

  // Api Key  here from https://clarifai.com/
// const app = new Clarifai.App({
//   apiKey: 'ebcdf5e3de5249c5b10551e3c9759066'
// });

// const returnclarifaiRequestOptions = (imageUrl) => {
//   // PAT personal access Taoken
//   const PAT = '7738aef8052d46e8affdf625f56f2606';
//   const USER_ID = '2ln47k71c6a5';
//   const APP_ID = 'face-id'
//   const MODEL_ID = 'face-detection';
//   const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
//   const IMAGE_URL = imageUrl;


  const initialState = {
    input: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joined: ''
    }
  }

  class App extends Component {
    constructor() {
      super();
      this.state = initialState;
    }

      loadUser = (data) => {
        this.setState({user: {
          id: data.id,
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined
        }})
      }

      calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      }

      displayFaceBox = (box) => {
        this.setState({box: box});
      }

      onInputChange = (event) => {
        this.setState({input: event.target.value});
      }

      onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
          fetch('http://localhost:3000/imageurl', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              input: this.state.input
            })
          })
          .then(response => response.json())
          .then(response => {
            if (response) {
              fetch('http://localhost:3000/image', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  id: this.state.user.id
                })
              })
                .then(response => response.json())
                .then(count => {
                  this.setState(Object.assign(this.state.user, { entries: count}))
                })
                .catch(console.log)

            }
            this.displayFaceBox(this.calculateFaceLocation(response))
          })
          .catch(err => console.log(err));
      }

      onRouteChange = (route) => {
        if (route === 'signout') {
          this.setState(initialState)
        } else if (route === 'home') {
          this.setState({isSignedIn: true})
        }
        this.setState({route: route});
      }

      render(){
        const {isSignedIn,imageUrl, route, box} = this.state;
      return (
        <div className="App">
          <ParticlesOptions id ="particles"/>
          <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />

          {route === 'home'
          ?<div>
          <Logo />
          <Rank
          name= {this.state.user.name}
          entries = {this.state.user.entries}
          />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
            />
          <FaceRecognition box={box} imageUrl={imageUrl}/>
        </div>
        : (
          route === 'signin'
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          )
        }
        </div>
      );
    }
}

export default App;