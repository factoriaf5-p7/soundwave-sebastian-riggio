import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';


const Header: React.FC = () => {
  return (
    <header className="text-white text-center py-3 z-2 container">
      <Container fluid className="d-flex justify-content-between align-items-center" >
        <Link to="/" className=" text-white text-decoration-none align-items-center  ">
          <div className="d-flex align-items-center gap-3">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className=" fs-4">SoundWave</h1>
          </div>
        </Link>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/discover" className="btn btn-light me-2 text-white">
            Discover
          </Nav.Link>
          <Nav.Link as={Link} to="/join" className="btn btn-light text-white">
            Join
          </Nav.Link>
        </Nav>
      </Container>
     
      
    </header>
  );
};

export default Header;
