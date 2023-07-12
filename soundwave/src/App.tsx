import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header/Header';
import MainHome from './pages/Home/MainHome';
import MainJoin from './pages/Join/Mainjoin';
import MainDiscover from './pages/Discover/Maindiscover';

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-dark min-vh-100 d-flex flex-column overflow-hidden ">
        <Header />
        <Container className=" my-auto">
          <Routes>
            <Route path="/discover" element={<MainDiscover />} />
            <Route path="/join" element={<MainJoin />} />
            <Route path="/" element={<MainHome />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
