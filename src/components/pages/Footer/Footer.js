import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Quick Links</h2>
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Contact</Link>
            <Link to='/'>Signup</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Member Area</h2>
            <Link to='/'>Sign Up</Link>
            <Link to='/'>LogIn</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
            <Link to='/'>LinkedIn</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img className="navbar-icon" src="assets/logo_text.png" height="90" width="160"
                  alt="Plutus" />
            </Link>
          </div>
          <small className='website-rights'>Plutus Wallet © 2021</small>
          <div className='social-icons'>
            <Link className='social-icon-link' to='/'>
              <FaFacebook />
            </Link>
            <Link className='social-icon-link' to='/'>
              <FaInstagram />
            </Link>
            <Link className='social-icon-link' to='/'>
              <FaTwitter />
            </Link>
            <Link className='social-icon-link' to='/'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;