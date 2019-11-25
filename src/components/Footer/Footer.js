import React from 'react';
import './Footer.scss';
import { Select } from '../Select';

export const Footer = (props) => (
  <footer className="footer">
    <div className="content">
      <div className="footer__top-part">
        <div className="footer__main">
          <div className="footer__logo-container">
            <img
            className="footer__logo"
            src="./images/logo-white.svg"
            alt="Uber Eats"
            />

            <Select
              name="language"
              options={[
                { value: 'en', label: 'English'},
                { value: 'uk', label: 'Ukrainian'},
              ]}
              value="en"
              iconUrl="./images/globe.svg"
            />
          </div>

          <div className="footer__mobile-apps">
            <a
              href="#"
              className="footer__mobile-app"
            >
              <img
                src="./images/app-store.png"
                alt="App Store"
                className="footer__mobile-app"
              />
            </a>
            <a
              href="#"
              className="footer__mobile-app"
            >
              <img
                src="./images/google-play.png"
                alt="Google Play"
                className="footer__mobile-app"
              />
            </a>
          </div>
        </div>

        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            About UberEats
          </a>
          <a href="#" className="links__link">
            Read our blog
          </a>
          <a href="#" className="links__link">
            Sign up to deliver
          </a>
          <a href="#" className="links__link">
            Add your restaurant
          </a>
        </div>
        <div className="footer__top-links links">
          <a href="#" className="links__link links__link--intended">
            Get help
          </a>
          <a href="#" className="links__link">
            Read FAQs
          </a>
          <a href="#" className="links__link">
            View all cities
          </a>

        </div>
      </div>
      <div className="footer__bottom-part">
        <p className="footer__copyright">
          © 2019 Uber Technologies Inc.
          </p>
        <div className="footer__misc">
          <div className="footer__bottom-links links">
            <a href="#" className="links__link">
              Privacy policy
          </a>
            <a href="#" className="links__link">
              Terms of  use
          </a>
            <a href="#" className="links__link">
              Pricing
          </a>
          </div>

          <div className="footer__social social">
            <a href="#" className="social__link">
              <img src="./images/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" className="social__link">
              <img src="./images/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
