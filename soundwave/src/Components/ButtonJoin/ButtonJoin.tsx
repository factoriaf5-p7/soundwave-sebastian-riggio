import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ButtonJoin: React.FC = () => {
  return (
    <div className="d-inline-block">
      <Button  variant="primary" style={{ fontSize: '1.2rem' }}>
        <Link to="/join" className="text-decoration-none text-white">Join Now</Link>
      </Button>
    </div>
  );
};

export default ButtonJoin;
