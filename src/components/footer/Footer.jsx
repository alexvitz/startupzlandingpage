import React from 'react';
import '../../styles/styles.scss';
import { Col, Row } from 'react-bootstrap';
import { images } from '../../utils/images';
import { strings } from '../../utils/strings';

const Footer = ({ scrollToComponent }) => {
  return (
    <div className="footer">
      <Row className="w-100">
        <Col md={4} className="footerSection">
          <img alt="logo" src={images.logo} className="mb-5" />
          <p className="footerSecondaryText">{strings.footer.credits}</p>
        </Col>
        <Col md={3} className="footerSection">
          <p className="footerSectionTitle">Companies</p>
          <p
            className="footerLinks"
            onClick={() => scrollToComponent('ourWorks')}
          >
            Tolq
          </p>
          <p
            className="footerLinks"
            onClick={() => scrollToComponent('ourWorks')}
          >
            LeaglSite
          </p>
          <p
            className="footerLinks"
            onClick={() => scrollToComponent('ourWorks')}
          >
            Codekeeper
          </p>
          <p
            className="footerLinks"
            onClick={() => scrollToComponent('ourWorks')}
          >
            Feedback Labs
          </p>
        </Col>
        <Col md={3} className="footerSection">
          <p className="footerSectionTitle">Contact</p>
          <p className="footerSecondaryText">{strings.footer.adress}</p>
          <p
            className="footerLinks"
            onClick={() => scrollToComponent('contact')}
          >
            {strings.footer.email}
          </p>
        </Col>
        <Col md={2} className="footerSection">
          <p className="footerSectionTitle">Follow us</p>
          <a href="https://twitter.com">
            <img
              alt="twitter"
              src={images.twitter}
              className="socialMediaLogo"
            />
          </a>
          <a href="https://www.linkedin.com">
            <img
              alt="linkedin"
              src={images.linkedin}
              className="socialMediaLogo"
            />
          </a>
          <a href="https://www.instagram.com">
            <img
              alt="instagram"
              src={images.instagram}
              className="socialMediaLogo"
            />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
