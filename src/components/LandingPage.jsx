import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { images } from '../utils/images';
import { strings } from '../utils/strings';
import Contact from './contact/Contact';
import Projects from './projects/Projects';
import { mockData } from '../utils/mockData';

const LandingPage = ({ scrollToComponent }) => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleMouseEnter = () => {
    setIsPopUpVisible(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    let isValid = true;

    if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.message.length < 3) {
      newErrors.message = 'Message must be at least 3 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      alert('Your message was sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="w-100">
      <div style={{ padding: '5% 0 0 5%' }}>
        <Row className="m-0">
          <Col className="text-start">
            <p className="pageTitle mb-4">
              We Create
              <br />
              Startups.
            </p>
            <p className="orangeText mb-4">{strings.pageSubtitle}</p>
            <button
              className="blueBtn"
              onClick={() => {
                scrollToComponent('ourWorks');
              }}
            >
              See our works
            </button>
          </Col>
          <Col className="d-flex justify-content-end pe-0">
            <img alt="artwork" src={images.artwork} />
          </Col>
        </Row>
      </div>
      <div className="shadedContainer">
        <Row className="align-items-center d-flex">
          <Col md={10}>
            <p className="pageSubtitle">Who we are</p>
            <p className="orangeText">
              {strings.about.description} <br />
            </p>
          </Col>
          <Col md={2}>
            <img alt="questiionMark" src={images.questionMark} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="me-5">
            <p className="stepNumber">01</p>
            <hr className="underLine" />
            <p className="infoText">{strings.about.step1}</p>
          </Col>
          <Col>
            <p className="stepNumber">02</p>
            <hr className="underLine" />
            <p className="infoText">{strings.about.step2}</p>
          </Col>
          <Col>
            <p className="stepNumber">03</p>
            <hr className="underLine" />
            <p className="infoText">{strings.about.step3}</p>
          </Col>
        </Row>
      </div>
      <div className="banner">
        <Row className="w-100">
          <Col md={3} className="d-flex justify-content-end">
            <img
              className="thumbsUpImg"
              alt="leftThumbsUp"
              src={images.leftThumbsUp}
            />
          </Col>
          <Col
            md={5}
            className="align-items-center d-flex justify-content-center"
          >
            <p className="bannerText">We love solving problems!</p>
          </Col>
          <Col md={3} className="d-flex justify-content-start">
            <img
              className="thumbsUpImg"
              alt="rightThumbsUp"
              src={images.rightThumbsUp}
            />
          </Col>
          <Col md={1}>
            <div
              className={`benContainer ${isPopUpVisible ? 'hovered' : ''}`}
              onMouseEnter={handleMouseEnter}
            >
              {isPopUpVisible && (
                <div className="popUp">
                  <img
                    className="popUpInfo"
                    alt="benText"
                    src={images.benText}
                  />
                  <span
                    onClick={() => {
                      setIsPopUpVisible(false);
                    }}
                  >
                    &times;
                  </span>
                </div>
              )}
              <img className="ben" alt="Ben" src={images.virtualAssistent} />
            </div>
          </Col>
        </Row>
      </div>
      <div className="shadedContainer">
        <Row>
          <Col>
            <p className="pageSubtitle">Our core values</p>
          </Col>
          <Col className="d-flex justify-content-center">
            <img alt="lightBulb" src={images.lightBulb} />
          </Col>
        </Row>
        <Row>
          <Col md={5} className="me-5">
            <p className="stepNumber">01. Innovation</p>
            <hr className="underLine" />
            <p className="infoText">{strings.values.innovation}</p>
          </Col>
          <Col md={5}>
            <p className="stepNumber">02. People</p>
            <hr className="underLine" />
            <p className="infoText">{strings.values.people}</p>
          </Col>
        </Row>
      </div>
      <div id="ourWorks" className="whiteContainer">
        <Row className="text-center mb-5">
          <p className="pageSubtitle">Our Works</p>
        </Row>
        <Projects data={mockData} />
        <div className="banner">
          <Row className="w-100">
            <Col className="d-flex justify-content-end align-items-center">
              <img
                className="thumbsUpImg"
                alt="leftThumbsUp"
                src={images.leftThumbsUp}
              />
            </Col>
            <Col
              md={7}
              className="align-items-center d-flex justify-content-center"
            >
              <p className="bannerText">{strings.ourWorksBanner}</p>
            </Col>
            <Col className="d-flex justify-content-start align-items-center">
              <img
                className="thumbsUpImg"
                alt="rightThumbsUp"
                src={images.rightThumbsUp}
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="shadedBanner">
        <Row className="m-0">
          <Col className="ps-0">
            <img alt="exclamationMan" src={images.exclamationMan} />
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center text-center">
            <p className="pageSubtitle">We are hiring!</p>
            <p className="orangeText w-75">{strings.hiring}</p>
            <button className="blueBtn">See current openings</button>
          </Col>
          <Col className="d-flex justify-content-end pe-0">
            <img alt="binocularsMan" src={images.binocularsMan} />
          </Col>
        </Row>
      </div>
      <div id={'contact'}>
        <Contact
          formData={formData}
          errors={errors}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LandingPage;
