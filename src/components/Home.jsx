import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-part">
          <div className="home-circle"></div>
          <div className="home-text">
            <div className="hero-text">
            <h2>Too tired to do certain chores?</h2>
            <p>With Ise you get to hire extra help <br/>to do those things you dont have <br/>the strength for.</p>
            </div>
            <div className="download-btn">
              <div className="apple">
                <a href="#"><img src="images/download-apple.svg" alt=""/></a>
              </div>
              <div className="android">
                <a href="#"><img src="images/download-google.svg" alt=""/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-image">
          <div className="home-text2">
            <img src="images/homehero.png" alt="" />
          </div>
          <div className="home-circle2"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;