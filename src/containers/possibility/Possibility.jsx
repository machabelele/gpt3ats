import React from 'react';
import possibilityImage from '../../assets/assets/possibility.png'
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>GPT-3's versatility and expansive language capabilities unlock unforeseen potential, ushering in an era where AI-driven solutions transcend conventional boundaries, revolutionizing industries and human-AI collaboration. Its capacity to innovate, learn, and adapt promises to reshape the way we approach challenges and harness opportunities.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
}

export default Possibility;