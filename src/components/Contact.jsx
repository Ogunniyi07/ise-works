import React from "react";
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Hey!<br/>Have a Problem?</h2>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="text" placeholder="Tell us your problem" required/>
        <input type="file" placeholder="Add attachment" />
        <div className="contact-btn">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;