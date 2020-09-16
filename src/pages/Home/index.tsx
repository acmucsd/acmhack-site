import React from 'react';
import LandingCard from 'components/LandingCard';
import calendar from 'assets/calendar.svg';
import EventList from 'containers/Events/EventsListContainer';
import NavBar from 'components/NavBar';
import './style.less';
import Description from 'components/Description';

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <LandingCard />
      <div className="container">
        <h2>Content</h2>
        <Description
          title="Previous Workshops"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit nibh sed elit imperdiet, eget pharetra mi finibus. Sed consectetur ac erat quis eleifend. Aenean placerat suscipit nisl ac congue. Cras commodo in ante eu porttitor. Donec a finibus elit. Ut consequat, risus nec iaculis consequat, nulla tellus ultricies lectus, a facilisis nibh massa vel turpis. Mauris dictum dignissim ornare. Aliquam blandit purus erat. Nulla facilisi. Pellentesque sagittis lorem vel feugiat volutpat. Integer ac lacinia ante."
        />
        <h2>
          Events <img alt="calendar icon" src={calendar}></img>{' '}
        </h2>
        <p>Participate in fun activities!</p>
        <EventList limit={4} />
      </div>
    </div>
  );
};

export default Home;
