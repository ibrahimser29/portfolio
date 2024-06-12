import React from 'react';
import { BsTwitter, BsInstagram,BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://www.linkedin.com/in/ibrahimSerhan99/'>
      <BsLinkedin />
      </a>
    </div>
    <div>
      <a href='https://www.facebook.com/ibrahim.serhan345'>
      <FaFacebookF />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/ibrahim.serhan19'>
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
