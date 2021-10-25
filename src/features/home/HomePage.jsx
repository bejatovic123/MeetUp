import React from 'react';
import {
  Container,
  Segment,
  Header,
  Image,
  Button,
  Icon,
} from 'semantic-ui-react';

export default function HomePage({ history }) {
  return (
    <Segment inverted textAlign='center' vertical className='fronthome'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginButton: 12 }}
          />
          Meet-Up
        </Header>
        <Button onClick={() => history.push('/events')} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
