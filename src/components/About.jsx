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
                <h2>All About ISE</h2>
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
        <div className="about-goal">
          <div className="goal">
            <p>Our Goal</p>
          </div>
          <div className="card">
            <p>ISE came about as a means to help domestic workers looking to reach a larger audience and also to help people too occupied to do little jobs around. Our expertise grow with each year, and our accumulated experience empowers us to develop well enough to serve our clients.</p>
          </div>
      </div>
      {/* <div className="about-section">
        <div className="about-mobile">
          <img src="\images\mobile.png" alt="" />
        </div>
        <div className="about-mobiletext">
          <h2>With a One way App where you can be either a worker or an employer or even both!!</h2>
        </div>
      </div> */}
      {/* <div className="about-numbers">
        <div className="about-customers">
          <h2>3000+</h2>
          <p>Customers</p>
        </div>
        <div className="about-customers">
          <h2>2500+</h2>
          <p>Happy Customers</p>
        </div>
        <div className="about-customers">
          <h2>30</h2>
          <p>Staffs</p>
        </div>
      </div> */}
      <div className="about-rect">
          <div className="about-card">
            <img src="\images\service1.png" alt="" />
          </div>
          <div className="about-card1">
            <img src="\images\service2.png" alt="" />
          </div>
        </div>
      <div className="about-sponsor">
        <h2>Our Sponsors</h2>
        <marquee behavior="scroll" direction="left" scrollamount="5">
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
        </marquee>
      </div>
      <div className="about-btn">
        <button type="button">Become a Partner</button>
      </div>
    </div>
  );
}

export default About;