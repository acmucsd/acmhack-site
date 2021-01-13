import React from 'react';
import './style.less';
import { EventObject } from 'actions/events';
import { getAbsoluteURL } from 'utils/url';

import { ReactComponent as Info } from '../../../assets/info.svg';
import  { ReactComponent as GitHubLogo } from '../../../assets/github-small.svg';

export type EventCardProps = {
  /**
   * Event to display as a card
   */
  event: EventObject,
  type: string
}

const HackEventCard = ({ event }: EventCardProps) => {
  let facebooklink = event.facebook == null ? 'https://www.facebook.com/acmucsd' : event.facebook;
  let githublink = event.github == null ? 'https://github.com/acmucsd/' : event.github;

  return (
    <div className="hack-event-card-wrapper">
      <div className="hack-event-card">
        <div className="info">
          <h1 className="title">
            {event.title}
          </h1>
          <p>
            {event.description.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
          <div className="event-info-group">
            <div className="event-info">
             <a target="_blank" rel="noopener noreferrer" href={getAbsoluteURL(facebooklink)}><Info /></a>
            </div>
            <div className="event-info">
              <a target="_blank" rel="noopener noreferrer" href={getAbsoluteURL(githublink)}><GitHubLogo /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HackEventCard;
