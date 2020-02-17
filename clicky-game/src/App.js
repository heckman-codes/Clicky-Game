import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router } from "react-router-dom";
// import MainContent from './components/MainContent';
import ImageCard from './components/ImageCard'
import Wrapper from './components/Wrapper'
import images from './images.json'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Wrapper >
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
          <ImageCard image={images[0].image} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
