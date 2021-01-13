import React from 'react';
import LandingCard from 'components/LandingCard';
import Description from 'components/Description';
import calendar from 'assets/calendar.svg';
import EventList from 'containers/Events/EventsListContainer';
import NavBar from 'components/NavBar';
import './style.less';
import Team from 'components/Team';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <LandingCard />
      <div className="container">
        <Description
          title="Yes, we like to code."
          text="
          We are a community in ACM @ UCSD focused on learning more about software engineering and exploring what is possible through code.
          We frequently host workshop aimed at empowering students to create amazing projects, as well as events to help students learn more
          about software engineering and finding their path. Our events are for people of all skill levels, so whether you're a first-time
          coder or a skilled programmer, we'd be happy to have you join the ACM Hack community!
        "
        />
        <h2>
          Events <img alt="calendar icon" src={calendar}></img>{' '}
        </h2>
        <p>Participate in fun activities!</p>
        <EventList limit={4} />
        <Team />
      </div>
    </div>
  );
};

export default Home;
