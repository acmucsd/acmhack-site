import React from 'react';
import './style.less';
import HackLogo from 'assets/hack.svg';

export type DescriptionProps = {
  title: string;
  content: string;
  sideImage?: string;
}
const Description = ({ title, content, sideImage }: DescriptionProps) => {
  return (
    <div className="Description">
      <h2 className="header">{title}</h2>
      <div className="content-wrapper">
        <p className="content">{content}</p>
        <img className="side-image" src={HackLogo} alt="description-side" />
      </div>
    </div>
  );
};

export default Description;
