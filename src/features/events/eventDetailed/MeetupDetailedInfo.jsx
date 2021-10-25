import { format } from 'date-fns';
import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';

export default function MeetupDetailedInfo({ event }) {
  return (
    <Segment.Group>
      <Segment attached='top'>
        <Grid>
          <Grid.Column width={1}>
            <Icon size='large' color='teal' name='info' />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{event.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      {/* 1 */}
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='calendar' size='large' color='teal' />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{format(event.date, 'MMMM d, yyyy h:mm a')}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      {/* 2 */}
      <Segment attached>
        <Grid verticalAlign='middle'>
          <Grid.Column width={1}>
            <Icon name='marker' size='large' color='blue' />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>{event.venue}</span>
          </Grid.Column>
          {/* <Grid.Column width={4}> */}
          {/* <Button color='teal' size='tiny' content='Show Map' /> */}
          {/* </Grid.Column> */}
        </Grid>
      </Segment>
      {/* 3 */}
    </Segment.Group>
  );
}
