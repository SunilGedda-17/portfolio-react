import React from 'react'
import './ContactInfo.css'

const ContactInfo = ({iconUrl, text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfo;
