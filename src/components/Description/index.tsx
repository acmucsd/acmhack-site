import React from 'react';
import './style.less';
import heart from '../../assets/heart.svg';
import DescriptionImg from '../../assets/description_image.jpg';

interface Props {
  title: string;
  text: string;
}
const Description: React.FC<Props> = ({ title, text }) => (
  <div className="description" id="description">
    <h2>{title}</h2>
    <div className="description-content">
      <span className="text">{text}</span>
      <img className="description-image" src={DescriptionImg} alt="It's us!" />
    </div>
  </div>
);

export default Description;
