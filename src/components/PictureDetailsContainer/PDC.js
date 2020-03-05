import React, { useState, useEffect } from "react";
import axios from "axios";
import './PDC.css';

function PicDetail() {
  // Store the users in a state variable.
  // We are passing an empty array as the default value.
  let [imageDetail, setImageDetail] = useState([]);

  // The useEffect() hook fires any time that the component is rendered.
  // An empty array is passed as the second argument so that the effect only fires once.
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => setImageDetail(response.data));
  }, []);

  return (
    <div className="imageDivDetail">
      <code className = 'renderedImageDetailTITLE'> {JSON.stringify(imageDetail.title)} </code> 
      <code className = 'renderedImageDetailDATE'> {JSON.stringify(imageDetail.date)} </code> 
     <code className = 'renderedImageDetailEXP'> {JSON.stringify(imageDetail.explanation)} </code> 

    </div>
  );
}

export default PicDetail;