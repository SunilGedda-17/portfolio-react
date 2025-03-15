import React from "react";
import "./ContactMe.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactDetails from "./ContactDetails/ContactDetails";

const ContactMe = () => {
  return (
    <section className="contact-container" id="contact">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfo iconUrl="./assets/images/mail.png" text="srisunil.gedda@gmail.com" />
          
          {/* Updated GitHub link with white color and "Link:" text */}
          <ContactInfo 
            iconUrl="./assets/images/github.png" 
            text={
              <span className="contact-info">
                <span className="link-label">Link:</span>
                <a href="https://github.com/sunilgedda-17" target="_blank" rel="noopener noreferrer">
                  https://github.com/sunilgedda-17
                </a>
              </span>
            } 
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactDetails />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
