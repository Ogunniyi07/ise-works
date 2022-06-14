import React from "react";
import './Contact.css';
import {useRef} from 'react';

const Contact = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // reset file input
    event.target.value = null;

    // its now empty
    console.log(event.target.files);

    // can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h2>Hey!<br/>Have a Problem?</h2>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Name" required/>
        <input type="email" placeholder="Email" required/>
        <input type="text" placeholder="Tell us your problem" required/>
        <div className="attachment">
          <label htmlFor="file-input">
            <img src="\images\attachment.png" alt="" onClick={handleClick}/>
            <p onClick={handleClick}>Add Attachment</p> 
          </label>
            <input
              style={{display: 'none'}}
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
            />
        </div> 
        <div className="contact-btn">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;