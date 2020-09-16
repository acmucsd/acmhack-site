import React from 'react';
import Navbar from '../../components/NavBar';
import HackEventList from 'containers/HackEvents/EventsListContainer';
import Description from 'components/Description';
import './style.less';

const Workshops: React.FC = () => {
  return (
    <div className="page workshops">
      <Navbar />
      <div className="container workshop-content">
        <Description
          title="Previous Workshops"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nibh sed elit imperdiet, eget pharetra mi finibus. Sed consectetur ac erat quis eleifend. Aenean placerat suscipit nisl ac congue. Cras commodo in ante eu porttitor. Donec a finibus elit. Ut consequat, risus nec iaculis consequat, nulla tellus ultricies lectus, a facilisis nibh massa vel turpis. Mauris dictum dignissim ornare. Aliquam blandit purus erat. Nulla facilisi. Pellentesque sagittis lorem vel feugiat volutpat. Integer ac lacinia ante."
        />
        <h2>
          Hack.Py
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vitae augue curabitur in sapien, volutpat lacus.
        </p>
        <HackEventList limit={4} type={'hack.py'}/>
        <h2>
          Hackschool
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vitae augue curabitur in sapien, volutpat lacus.
        </p>
        <HackEventList limit={4} type={'hackschool'}/>
      </div>
    </div>
  );
};

export default Workshops;
