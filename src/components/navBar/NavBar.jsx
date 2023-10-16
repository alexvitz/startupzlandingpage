import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { images } from '../../utils/images';

const NavBar = ({ scrollToComponent }) => {
  return (
    <div className="navBar">
      <Row className="w-100">
        <Col md={6} className="d-flex justify-content-start">
          <img alt="logo" src={images.logo} />
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-end align-items-baseline">
            <p className="blackLinks">Startups</p>
            <p className="blackLinks">Contact</p>
            <button
              className="transparentBtn"
              onClick={() => {
                scrollToComponent('contact');
              }}
            >
              Work with us!
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NavBar;
