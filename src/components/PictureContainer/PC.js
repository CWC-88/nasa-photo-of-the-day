import React, { useState, useEffect } from "react";
import axios from "axios";
import './PC.css';

function Pic() {
  // Store the users in a state variable.
  // We are passing an empty array as the default value.
  let [image, setImage] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => setImage(response.data));
  }, []);

  return (
    <div className="imageDiv">
      <img className = 'renderedImage' src= {image.url} alt='dailyImage' />
    </div>
  );
}

export default Pic;

