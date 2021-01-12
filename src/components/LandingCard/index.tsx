import React from 'react';
import TypistLoop from '../TypistLoop';
import leftside from 'assets/left_diamonds.svg';
import rightside from 'assets/right_diamonds.svg';
import arrow from 'assets/arrow.svg';
import './style.less';

const LandingCard: React.FC = () => {
  return (
    <div className="LandingCard">
      <div className="backdrop-wrapper">
        <img src={leftside} className="backdrop-left" alt="backdrop" />
        <img src={rightside} className="backdrop-right" alt="backdrop" />
        <div className="arrow">
          <div>Learn More</div>
          <img src={arrow} alt="arrow" />
        </div>
        <span className="landing-text">
          <h1 className="landing-title">ACM Hack</h1>
          <TypistLoop words={['Empowering our community of software engineers.', 'Building cool things with code.']} />
        </span>
      </div>
    </div>
  );
};

export default LandingCard;
