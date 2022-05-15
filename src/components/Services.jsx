import React from "react";
import './Services.css';

const Services = () => {
    return (
      <div className="service">
        <div className="service-hero">
          <div className="service-part">
            <div className="service-circle"></div>
            <div className="service-text">
              <div className="servicehero-text">
                <h2>Keeping Customers Happy</h2>
              </div>
            </div>
          </div>
          <div className="service-image">
            <div className="service-text2">
              <img src="\images\servicehero2.webp" alt="" />
            </div>
            <div className="service-circle2"></div>
          </div>
        </div>
        <div className="service-section">
          <div className="service-enterprise">
            <h2>What we do</h2>
            <p>ISE offers various amount of services to give our clients the best experience when using our product</p>
          </div>
          <div className="service-enterprise1">
            <div className="service-enterprise-img">
              <img src="\images\Vector3.png" alt="" />
              <p>Enterprise Services</p>
            </div>
            <div className="service-enterprise-img">
              <img src="\images\Vector4.png" alt="" />
              <p>Financial Services</p>
            </div>
          </div>
          <div className="service-enterprise1">
            <div className="service-enterprise-img">
              <img src="\images\Vector1.png" alt="" />
              <p>24/7 Customer Service Support</p>
            </div>
            <div className="service-enterprise-img">
              <img src="\images\Vector2.png" alt="" />
              <p>Cheap rates</p>
            </div>
          </div>
        </div>
        <div className="service-rect">
          <div className="service-card">
            <img src="\images\service1.png" alt="" />
          </div>
          <div className="service-card1">
            <img src="\images\service2.png" alt="" />
          </div>
        </div>
        <div className="service-workers">
          <div className="workers-title">
            <h2>Here are our Workers</h2>
          </div>
          <div className="workers-img">
            <img src="\images\workers.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Services;