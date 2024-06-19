// src/components/Contact/Contact.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faCodepen, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar/Navbar';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
    
      <section id="contact">
        <h1 className="section-header">Contact</h1>
        <div className="contact-wrapper">
          <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <textarea
              className="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
              <div className="alt-send-button">
                <FontAwesomeIcon icon={faPaperPlane} /><span className="send-text">SEND</span>
              </div>
            </button>
          </form>
          <div className="direct-contact-container">
            <ul className="contact-list">
              <li className="list-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} /><span className="contact-text place">City, State</span>
              </li>
              <li className="list-item">
                <FontAwesomeIcon icon={faPhone} /><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span>
              </li>
              <li className="list-item">
                <FontAwesomeIcon icon={faEnvelope} /><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span>
              </li>
            </ul>
            <hr />
            <ul className="social-media-list">
              <li><a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faGithub} aria-hidden="true" /></a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faTwitter} aria-hidden="true" /></a>
              </li>
              <li><a href="#" target="_blank" className="contact-icon">
                <FontAwesomeIcon icon={faInstagram} aria-hidden="true" /></a>
              </li>
            </ul>
            <hr />
            <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
