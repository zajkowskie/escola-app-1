import React from 'react';
import footerImage from './img/footer__arrow.png';

function Footer() {
  return (
    <div className="footer">
        <a href="#home">
            <img src={footerImage} />Back to top
        </a>
    </div>
  );
}

export default Footer;
