import React from 'react'
import PhotoMainDiscover from '../../assets/covers.jpg'
import IconoMicro from '../../assets/microphone.svg'
import IconoAlbums from '../../assets/albums.svg'
import IconoMore from '../../assets/more.svg'
import Footer from '../../Components/Footer/Footer'


const Main: React.FC = () => {
  return (
    <>
      <main className='text-white overflow-hidden'>
      <div className="d-flex flex-md-row flex-column align-items-center justify-content-center gap-3">


          <div className='d-flex flex-column justify-content-center gap-3' >
            <h1 className="fw-light fs-1">Discover new music</h1>
            <div className="d-flex  justify-content-start gap-3 ">
              <div className="bg-black d-flex flex-column align-items-center p-3">
                <img
                  className="w-100 h-auto  p-3"
                  src={IconoMicro}
                  alt="Microphone icon"
                />
                <p className="">Charts</p>
              </div>
              <div className="bg-black d-flex flex-column align-items-center p-3">
                <img 
                className="w-100 h-auto  p-3"
                src={IconoAlbums} alt="Albums icon" />
                <p className="">Albums</p>
              </div>
              <div  className="bg-black d-flex flex-column align-items-center p-3">
                <img
                className="w-100 h-auto p-3"
                src={IconoMore} alt="Look for more icon" />
                <p className="">More</p>
              </div>
            </div>
            <p className="fw-light fs-4">
              By joining you can benefit by listening to the latest album
              releases.
            </p>
          </div>
          <img
            className="mg-fluid w-45"
            src={PhotoMainDiscover}
            alt="Collage of album covers"
          />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Main
