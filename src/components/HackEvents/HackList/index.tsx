import React from 'react';
import { EventObject } from 'actions/events';
import HackEventCard from '../HackEventCard';
import './style.less';

export type EventListProps = {
  events: Array<EventObject>,
  type: string
}
const EventList = ({ events, type }: EventListProps) => {
  return (
    <div className="EventList">
      {events.map((event) => {
        return <HackEventCard event={event} type={type} />
      })}
    </div>
  );
};

export default EventList;
