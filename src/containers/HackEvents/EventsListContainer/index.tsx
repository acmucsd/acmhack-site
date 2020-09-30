import React, { useEffect, useState } from 'react';
import { getHackData, EventObject } from 'actions/events';
import HackEventList from 'components/HackEvents/HackList';

type EventsListContainerProps = { 
  /**
   * Max number of events to display
   */
  limit: number,
  type: string
}
const EventsListContainer = ({ limit, type }: EventsListContainerProps) => {
  const [events, setEvents] = useState<Array<EventObject>>([]);
  useEffect(() => {
    setEvents(getHackData(type).slice(0, limit));
  }, []);
  return (
    <HackEventList type={type} events={events} />
  );
};

export default EventsListContainer;
