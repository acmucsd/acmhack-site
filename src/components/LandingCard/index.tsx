import React from 'react';
import TypistLoop from '../TypistLoop';
import leftside from 'assets/left_diamonds.svg';
import rightside from 'assets/right_diamonds.svg';
import './style.less';
import { siteConfigs } from 'configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronDown);
library.add(fab);

const LandingCard: React.FC = () => {
  const scrollToInfo: () => void = () => {
    document.getElementById('description')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="LandingCard">
      <div className="backdrop-wrapper">
        <img src={leftside} className="backdrop-left" alt="backdrop" />
        <img src={rightside} className="backdrop-right" alt="backdrop" />
        <div className="arrow">
          <div>
            <a href={siteConfigs.links.discord}>
              Join us on <FontAwesomeIcon size="xs" color="white" icon={['fab', 'discord']} />
            </a>
          </div>
          <br></br>
          <FontAwesomeIcon
            onClick={scrollToInfo}
            size="xs"
            color="white"
            style={{ cursor: 'pointer' }}
            icon="chevron-down"
          />
        </div>
        <span className="landing-text">
          <h1 className="landing-title">ACM Hack</h1>
          <TypistLoop
            words={[
              'Empowering our community of software engineers.',
              'Building cool things with code.',
              'Yes, we like to code.',
            ]}
          />
        </span>
      </div>
    </div>
  );
};

export default LandingCard;
