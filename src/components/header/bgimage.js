import React from 'react';
import Image from '../../image/sonu.jpeg'
import pdf from '../../image/resume.pdf'
const bgimage = () => {
  return (
    <div className='bgimage'>
      <div className='bgblur'></div>
        <div className="bgname">
            <div className="center">              
            </div>
            <div className='index-center' data-aos="fade-up">
              <h1>Soham Kavde</h1>
              <p>Final Year Student,Web Developer</p>
              <div className="button">
                <button><a href={pdf} download>Resume</a></button>
                <p><a href="https://www.linkedin.com/in/soham-kavde-45141520a/" target="_blank" rel="noopener noreferrer">Let's talk</a></p>
                {/* <button><a href="https://www.linkedin.com/in/soham-kavde-45141520a/" target="_blank" rel="noopener noreferrer">Connect me</a> </button> */}
              </div>
            </div>
        </div>
        <div className="soham-intro-image" data-aos="fade-up">
          <div className="image-background">
            <div className="intro-img">
                <img src={Image} alt="Soham Kavde" width="100%" height="100%" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default bgimage
