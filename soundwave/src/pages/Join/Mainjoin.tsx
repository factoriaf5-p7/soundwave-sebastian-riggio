import React from 'react'
import Form from '../../Components/Form/Form'
import Footer from '../../Components/Footer/Footer'
import './mainjoin.css'

const Mainjoin: React.FC = () => {
  return (
    <>
      <div className="d-flex flex-md-row flex-column align-items-center justify-content-center">
        <h2
          className=" fw-bold display-3 text-white p-5 "
          style={{ zIndex: 2 }}
        >
          Join the<span style={{ color: '#ff27a9' }}> fun.</span>
        </h2>
        <div className="z-2">
          <Form />
        </div>
      </div>
      <div className="pink-circle"></div>
      <div className="purple-circle"></div>

      <Footer />
    </>
  )
}

export default Mainjoin
