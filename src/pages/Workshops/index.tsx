import React from 'react';
import Navbar from '../../components/NavBar';
import HackEventList from 'containers/HackEvents/EventsListContainer';
import './style.less';

const Workshops: React.FC = () => {
  return (
    <div className="page workshops">
      <Navbar />
      <div className="container workshop-content">
        <h1>
          Previous Workshops
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vitae augue curabitur in sapien, volutpat lacus. Eros dui 
          ridiculus augue ultrices blandit feugiat egestas in lectus. 
          Scelerisque velit proin eu ullamcorper feugiat massa tempus, 
          amet vulputate. Morbi adipiscing condimentum et a, enim 
          facilisis ultricies mention workshop series somewhere 
          with a link like Hack.Py, HackSchool, Etc. Ideally these 
          would be a link to the events for that series.
        </p>
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
