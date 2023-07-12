import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import LogoFacebook from '../../assets/facebook.svg';
import LogoTwitter from '../../assets/twitter.svg';

const Buttons: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
    <Link to="/discover" className="text-white font-weight-bold text-decoration-none hover-secondary me-2">About Us</Link>
    <Link to="/join" className="text-white font-weight-bold text-decoration-none hover-primary ms-2">Contact</Link>
  </div>
  );
};

const Pages: React.FC = () => {
  return (
    <div className='d-flex gap-5'>
      <div className='d-flex flex-row justify-content-center align-items-center text-center'>
        <img className="w-15 me-2" src={LogoTwitter} alt="w-15 h-15" />
        <Link to="https://twitter.com/?lang=es/" className="text-white font-weight-bold text-decoration-none ">Twitter</Link>
      </div>
      <div className='d-flex flex-row justify-content-center align-items-center text-center'>
        <img className="w-15 me-2" src={LogoFacebook} alt="d-flex flex-column justify-content-center align-items-center text-center" />
        <Link to="https://es-es.facebook.com/" className="text-white font-weight-bold text-decoration-none">Facebook</Link>
      </div>
    </div>
  );
};
 
const Footer: React.FC = () => {
  return (
    <footer className="fixed-bottom bg-black text-white d-flex align-items-center justify-content-between p-3">
      <Buttons />
      <Pages />
    </footer>
  );
};

export default Footer;

