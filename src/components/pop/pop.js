import React from 'react';
import './pop.css';
import Img from '../../image/sonu.jpeg'
const pop = () => {
  return (
    <section id='pop'>
        <div className="modal" data-aos="zoom-in-down">
            <div className="modal-img">
                <img src={Img} alt="Soham Kavde" width="100%" height="100%"/>
            </div>
            <div className="talk-about">
                <p>Feel free to talk about-</p>
                <span>#webDevelopment</span>
                <span>#FreelancingWork</span>
                <span>#projectHelp</span>
                <span>#FreeDemoServices</span>
                <span>#yourFavouriteTopic</span>
            </div>
            <div className="action-modal">
                <p>Take a step ahead - <a href="https://www.linkedin.com/in/soham-kavde-45141520a/" target="_blank" rel="noopener noreferrer">Let's talk</a></p>
                <p>100% response of your message is my priority.</p>
            </div>
        </div>
    </section>
  )
}

export default pop;


