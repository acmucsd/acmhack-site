import React from 'react';
import { EventObject } from 'actions/events';
import HackEventCard from '../HackEventCard';
import './style.less';

export type EventListProps = {
  events: Array<EventObject>,
  type: string
}
const HackEventList = ({ events, type }: EventListProps) => {
  return (
    <div className="EventList">
      {events.map((event) => {
        return <HackEventCard event={event} type={type} key={event.uuid} />
      })}
    </div>
  );
};

export default HackEventList;
