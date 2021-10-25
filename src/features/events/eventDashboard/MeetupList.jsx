import React from 'react';
import MeetupListItem from './MeetupListItem';

export default function MeetupList({ events }) {
  return (
    <>
      {events.map((event) => (
        <MeetupListItem event={event} key={event.id} />
      ))}
    </>
  );
}
