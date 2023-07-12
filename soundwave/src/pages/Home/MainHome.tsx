import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import girlPhoto from '../../assets/landing-page-girl.png'
import ButtonJoin from '../../Components/ButtonJoin/ButtonJoin'
import './MainHome.css'

const Main: React.FC = () => {
  return (
    
    <Container >
      <main className="position-relative">
        <div className="text-white text-center py-3 overflow-hidden">
          <Row>
            <Col md={6} className="align-self-center">
              <img
                className="girl-photo m-0 d-none d-md-block position-relative"  style={{ zIndex: 95}}
                src={girlPhoto}
                alt="Afro-descendant woman with headphones listening to and enjoying music"
               />
            </Col>
            <Col md={6} className="align-self-center"  style={{ zIndex: 99}}>
              <div>
                <h1 className="fs-1">
                  Feel The <br /> music
                </h1>
                <p className="fs-4">
                  Stream over 20 thousand songs with one click
                </p>
                <ButtonJoin />
              </div>
            </Col>
          </Row>
          

        <div className='pink-cirle'></div>
        <div className='big-blue-cirle'></div>
        <div className='blue-cirle'></div> 

        </div>

        
        {/* <div
          className="position-absolute top-0 start-0 rounded-circle"
          style={{ zIndex: 50, width: '300px', height: '300px' , backgroundColor:'#bc3a801a'}}
        ></div>
        <div
          className="position-absolute top-5 start-18 translate-middle rounded-circle bg-blue"
          style={{ width: '50px', height: '50px' }}
        ></div>
        <div
          className="position-absolute bottom-0 end-0 translate-middle rounded-circle bg-blue"
          style={{ width: '50px', height: '50px' }}
        ></div> */}
       
      </main>
       
    </Container>
  )
}

export default Main
