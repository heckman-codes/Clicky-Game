import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
// import MainContent from './components/MainContent';
import ImageCard from './components/ImageCard'
import Wrapper from './components/Wrapper'
import images from './images.json'

function randomArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

var score = 0;
var highscore = 0;
var message = "Make a Selection";

var randomizedImages = randomArray(images);
var pickedImage = [];

class App extends Component {

  state = {
    images
  };

  clickImg = (id) => {
    randomizedImages = randomArray(images)
    if (pickedImage.includes(id)) {
      pickedImage = [];
      score = 0;
      message = "Incorrect. Start over.";
      setTimeout(function () {
        message = "Make another selection."
      }, 500)
    } else {
      score += 1;
      if (score >= highscore) {
        highscore = score;
      }
      message = "Correct! Score +1";
      setTimeout(function () {
        message = "Make another selection."
      }, 500)
    }

    pickedImage.push(id);

    console.log(pickedImage);
    console.log(id)
    this.setState({ images });
  }

  render() {
    return (
      <Router>
        <Navbar message={message} score={score} highscore={highscore} />
        <Wrapper >
          {randomizedImages.map(image => (
            <ImageCard
              clickImg={this.clickImg}
              id={image.id}
              name={image.name}
              image={image.image}
              key={image.id}
            />
          ))}
        </Wrapper>
        <Footer />
      </Router >
    );
  }
}

export default App;
