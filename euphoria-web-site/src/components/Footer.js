// src/components/Footer.js
import React from 'react';
import '../styles/index.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <div className="footer-column" style={{ width: '160px', height: '292px' }}>
              <div className="footer-title">Need Help</div>
              <ul>
                <li>Contact Us</li>
                <li>Track Order</li>
                <li>Returns & Refunds</li>
                <li>FAQ's</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="footer-column" style={{ width: '142px', height: '292px' }}>
              <div className="footer-title">Company</div>
              <ul>
                <li>About Us</li>
                <li>euphoria Blog</li>
                <li>euphoriastan</li>
                <li>Collaboration</li>
                <li>Media</li>
              </ul>
            </div>
            <div className="footer-column" style={{ width: '180px', height: '292px' }}>
              <div className="footer-title">More Info</div>
              <ul>
                <li>Term and Conditions</li>
                <li>Privacy Policy</li>
                <li>Shipping Policy</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className="footer-column" style={{ width: '440px', height: '292px' }}>
              <div className="footer-title">Location</div>
              <ul>
                <li>support@euphoria.in</li>
                <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
              </ul>
            </div>
          </div>
          <div className="footer-section">
            <div className="footer-column icons">
              <img src="/img/Group1.png" alt="Icon 1" />
              <img src="/img/Group2.png" alt="Icon 2" />
              <img src="/img/Group3.png" alt="Icon 3" />
              <img src="/img/Group4.png" alt="Icon 4" />
            </div>
            <div className="footer-column" style={{ width: '360px', height: '122px' }}>
              <div className="footer-title">Download The App</div>
              <br />
              <div className="app-icons">
                <img src="/img/Group5.png" alt="App Store" />
                <img src="/img/Group6.png" alt="Google Play" />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;