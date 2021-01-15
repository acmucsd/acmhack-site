import React from 'react';
import './style.less';
import defaultImage from '../../assets/description_image.jpg';

interface Props {
  title: string;
  icon?: React.ReactNode;
  img?: string;
  noimage?: boolean;
}
const Description: React.FC<Props> = ({ title, icon, img, noimage, children }) => {
  const descriptionImage = img ?? defaultImage;
  return (
    <div className="description" id="description">
      <h2>
        {title}
        {icon ?? icon}
      </h2>
      <div className="description-content">
        <span className="text">{children}</span>
        {noimage || <img className="description-image" src={descriptionImage} alt="It's us!" />}
      </div>
    </div>
  );
};

export default Description;
