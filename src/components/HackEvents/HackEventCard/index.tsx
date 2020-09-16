import React, { useEffect, useState } from 'react';
import './style.less';
import { EventObject } from 'actions/events';
import { formatDateToMonthAndDay, formatDateToTimeWithAMPM } from 'utils/date';
import { isURL, getAbsoluteURL } from 'utils/url';

import { ReactComponent as Info } from '../../../assets/info.svg';
import  { ReactComponent as GitHubLogo } from '../../../assets/github-small.svg';
import  { ReactComponent as VideoCamera } from '../../../assets/videocamera.svg';

export type EventCardProps = {
  /**
   * Event to display as a card
   */
  event: EventObject,
  type: string
}

const EventCard = ({ event, type }: EventCardProps) => {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    setTimeString(`${formatDateToTimeWithAMPM(event.start)} - ${formatDateToTimeWithAMPM(event.end)}`);
  }, [event]);

  let cover = event.cover == null ? 'https://imgur.com/9yC0xBz.png' : event.cover;
  let location = event.location == null ? 'https://acmurl.com/hack' : event.location;
  let facebooklink = 'https://www.facebook.com/acmucsd';
  let githublink = `https://github.com/acmucsd/${type}`;

  return (
    <div className="hack-event-card-wrapper">
      <div className="hack-event-card">
        <img className="image" src={cover} alt={event.title} />
        <div className="info">
          <h1 className="title">
            {event.title}
          </h1>
          <div className="time-info">
            <p className="date">{formatDateToMonthAndDay(event.start)}</p>
            <p className="time">{timeString}</p>
          </div>
          <div className="event-info-group">
            <div className="event-info">
              <Info />
              <p><a target="_blank" rel="noopener noreferrer" href={getAbsoluteURL(facebooklink)}>{facebooklink}</a></p>
            </div>
            <div className="event-info">
              <GitHubLogo />
              <p><a target="_blank" rel="noopener noreferrer" href={getAbsoluteURL(githublink)}>{githublink}</a></p>
            </div>
            <div className="event-info">
              <VideoCamera />
              <p>{isURL(location) ? <a target="_blank" rel="noopener noreferrer" href={getAbsoluteURL(location)}>{location}</a> : location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default EventCard;
