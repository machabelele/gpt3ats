import React from 'react';
import './header.css';
import people from '../../assets/assets/people.png';
import ai from '../../assets/assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Discover a convergence of human ingenuity and AI in GPT-3, OpenAI's premier language model, reshaping content creation and collaboration by transcending traditional programming. This paves the way for an AI-augmented future, fueling boundless creativity and innovation.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
       </div>

        <div className="gpt3__header-image">
            <img src={ai}  alt="ai"/>
         </div>
    </div>
  );
}

export default Header;