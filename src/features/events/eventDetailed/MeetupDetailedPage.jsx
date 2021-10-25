import React from 'react';
import { Grid } from 'semantic-ui-react';
import MeetupDetailedHeader from './MeetupDetailedHeader';
import MeetupDetailedInfo from './MeetupDetailedInfo';
import EventDetailedChat from './MeetupDetailedChat';
import MeetupDetailedSidebar from './MeetupDetailedSidebar';
import { useSelector } from 'react-redux';

export default function MeetupDetailedPage({ match }) {
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id),
  );
  return (
    <Grid>
      <Grid.Column width={10}>
        <MeetupDetailedHeader event={event} />
        <MeetupDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>

      <Grid.Column width={6}>
        <MeetupDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
}
