import React from 'react';
import { Grid } from 'semantic-ui-react';

import MeetupList from './MeetupList';

import { useSelector } from 'react-redux';

export default function MeetupDashboard() {
  const { events } = useSelector((state) => state.event);

  return (
    <Grid>
      <Grid.Column width={10}>
        <MeetupList events={events} />
      </Grid.Column>
      <Grid.Column width={6}></Grid.Column>
    </Grid>
  );
}
