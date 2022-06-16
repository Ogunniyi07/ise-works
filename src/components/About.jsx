import React from "react";
import './About.css';

const About = () => {


  return (
    <div className="about">
        <div className="about-hero">
          <div className="about-part">
            <div className="about-circle"></div>
            <div className="about-text">
              <div className="abouthero-text">
                <span className="text1"><h2>All About </h2></span>
                <span className="text2"><h2>ISE</h2></span> 
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-text2">
              <img src="\images\servicehero2.webp" alt="" />
            </div>
            <div className="about-circle2"></div>
          </div>
        </div>
        <div className="about-sec">
          <div className="about-blur"></div>
          <div className="about-goal">
            <div className="goal">
              <p>Our goal</p>
            </div>
            <div className="card">
              <p>ISE came about as a means to help domestic workers looking to reach a larger audience and also to help people too occupied to do little jobs around. Our expertise grow with each year, and our accumulated experience empowers us to develop well enough to serve our clients.</p>
            </div>
          </div>
        </div>
      <div className="about-sec1">
        <div className="about-blur1"></div>
        <div className="about-rect">
          <div className="about-card">
            <img src="\images\service1.png" alt="" />
          </div>
          <div className="about-card1">
            <img src="\images\service2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="about-sponsor">
        <h2>Our Sponsors</h2>
        <div id="maindiv">
  <div id="div1">
    &nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9 Test-10 Test-11
  </div>
  <div id="div2">
    &nbsp;Test-1 Test-2 Test-3 Test-4 Test-5 Test-6 Test-7 Test-8 Test-9 Test-10 Test-11
  </div>
</div>
        {/* <div className="marquee">
          <div className="slide1">
          <div className="sponsor-card">
          <img src="\images\sponsor4.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor2.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor1.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor3.png" alt="" />
          </div>  
          <div className="sponsor-card">
            <img src="\images\sponsor5.png" alt="" />
          </div> 
          <div className="sponsor-card">
            <img src="\images\sponsor6.png" alt="" />
          </div> 
          <div className="sponsor-card">
            <img src="\images\sponsor7.png" alt="" />
          </div>        
          </div>
          <div className="slide2">
          <div className="sponsor-card">
          <img src="\images\sponsor4.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor2.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor1.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor3.png" alt="" />
          </div>  
          <div className="sponsor-card">
            <img src="\images\sponsor5.png" alt="" />
          </div> 
          <div className="sponsor-card">
            <img src="\images\sponsor6.png" alt="" />
          </div> 
          <div className="sponsor-card">
            <img src="\images\sponsor7.png" alt="" />
          </div>        
          </div>
        </div> */}
        {/* <marquee behavior="scroll" direction="left" scrollamount="5">
        <div className="sponsor-card-row">
          <div className="sponsor-card">
          <img src="\images\sponsor4.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor2.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor1.png" alt="" />
          </div>
          <div className="sponsor-card">
            <img src="\images\sponsor3.png" alt="" />
          </div>  
          <div className="sponsor-card">
            <img src="\images\sponsor5.png" alt="" />
          </div> 
          <div className="sponsor-card">
            <img src="\images\sponsor6.png" alt="" />
          </div> 
          <div className="sponsor-card">
            <img src="\images\sponsor7.png" alt="" />
          </div>        
        </div>
        </marquee> */}
      </div>
      <div className="about-btn">
        <button type="button">Become a Partner</button>
      </div>
    </div>
  );
}

export default About;