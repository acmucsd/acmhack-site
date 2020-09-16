import React from 'react';
import calendar from 'assets/calendar.svg';
import EventList from 'containers/Events/EventsListContainer';
import NavBar from 'components/NavBar';
import './style.less';

const WorkshopPage = () => {
  return (
    <div className="WorkshopPage">
      <NavBar />
      <div className='container'>
        <h2>Workshops <img alt="calendar icon" src={calendar}></img> </h2>
        <EventList limit={4}/>
      </div>
    </div>
  );
};

export default WorkshopPage;
