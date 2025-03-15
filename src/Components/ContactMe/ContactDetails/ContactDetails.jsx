import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactDetails.css";

const ContactDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yj6zr5o", // Your Service ID
        "template_xx8pjhw", // Your Template ID
        form.current,
        "bsxbkmoIMJKmKOYSB" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          e.target.reset(); // Reset form after sending
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-content">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactDetails;
