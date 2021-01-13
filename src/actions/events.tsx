/**
 * Fetching events
 */

import { siteConfigs } from 'configs';

import hackEvents from '../assets/hackevents.json';

export type EventsResponse = {
  error: any;
  events: EventsArray;
};

export type EventsArray = EventObject[];

export type EventObject = {
  uuid: string;
  organization: string;
  committee: string;
  cover: string;
  title: string;
  description: string;
  location: string;
  eventLink: string | null;
  start: string;
  end: string;
  pointValue: number;
  requiresStaff: boolean;
  staffPointBonus: number;
  virtual?: boolean;
  github?: string;
  facebook?: string;
};

const handleErrors = (response: Response): Promise<EventsResponse> => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const getAllCommunityEvents = async (limit: number = -1): Promise<EventsArray | undefined> => {
  let apiurl = `https://acmucsd-membership-portal-api.herokuapp.com/api/v2/event/future?committee=${siteConfigs.committee}&limit=${limit}`;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    apiurl = `https://acmucsd-portal-testing.herokuapp.com/api/v2/event?committee=${siteConfigs.committee}`;
  }

  try {
    const response: Response = await fetch(apiurl);
    const result: EventsResponse = await handleErrors(response);
    return result.events;
  } catch (error) {
    return undefined;
  }
};
export const getHackData = (key: string): EventsArray => {
  if (key === 'hack.py') {
    return hackEvents['hack.py'];
  } else if (key === 'other') {
    return hackEvents['other'];
  } else if (key === 'hackschool') {
    return hackEvents['hackschool'];
  }
  return [];
};
