import React from 'react';
import Navbar from '../../components/NavBar';
import HackEventList from 'containers/HackEvents/EventsListContainer';
import './style.less';
import VideoPlayer from 'components/VideoPlayer';

const Workshops: React.FC = () => {
  return (
    <div className="page workshops">
      <Navbar />
      <div className="container workshop-content">
        <h2 id='top'>hack.py</h2>
        <h4>Winter 2021</h4>
        <p>hack.py is our 7 part workshop series teaching everything you need to know about Python. We start from the fundamentals of the language, then move on to its applications such as building a web server, web scraping, data anlytics, and etc. We're open to all skill levels, whether you're an experienced coder or never touched a line of code yourself. </p>
        <HackEventList type={'hack.py'} />
        
        <h2>Hack School: Learn the MERN</h2>
        <h4>Fall 2020</h4>
        <p>Hack School is a 6 part workshop series where we teach you everything about how to build a web application using the MERN stack. We start by going through the basics of HTML, CSS, and JavaScript, then go through building a complex React app, hooking it up to an API, and deploying it for the whole world to see. </p>
        <VideoPlayer
            url="https://www.youtube.com/playlist?list=PLpmCTDt8lemWE4CQ7shdIJ0VYXcErWw22"
        />
        <HackEventList type={'hackschool'} />

        <h2>Others</h2>
        <p>At ACM Hack, we like to teach a bunch of topics that we feel could help you grow as a developer. Below are some of our other workshops that we've hosted! </p>
        <HackEventList type={'other'} />
      </div>
    </div>
  );
};

export default Workshops;
