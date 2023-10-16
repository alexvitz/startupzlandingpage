import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { images } from '../../utils/images';
import { strings } from '../../utils/strings';

const Contact = ({ formData, errors, onInputChange, onSubmit }) => {
  return (
    <div className="contactConatiner">
      <Row className="h-100">
        <Col md={6}>
          <p className="contactTitle">{strings.contact.title}</p>
          <p className="contactSubtitle">{strings.contact.subtitle}</p>
          <div className="inputsContainer">
            <input
              type="text"
              placeholder="Name*"
              id="name"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              className="contactInput"
            />
            <span className="inputError">{errors.name}</span>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="Email*"
              className="contactInput"
            />
            <span className="inputError">{errors.email}</span>
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={onInputChange}
              placeholder="Message*"
              className="contactInput"
            />
            <span className="inputError">{errors.message}</span>
            <button className="contactBtn" type="submit" onClick={onSubmit}>
              Shoot us a message
            </button>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-end">
          <img className="rocketImg" alt="rocket" src={images.rocket} />
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
