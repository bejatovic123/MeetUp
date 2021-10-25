import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import MeetupDashboard from '../../features/events/eventDashboard/MeetupDashboard';
import NavBar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';
import MeetupDetailedPage from '../../features/events/eventDetailed/MeetupDetailedPage';
import MeetupForm from '../../features/events/eventForm/MeetupForm';
import ModalManager from '../common/modals/ModalManager';
import Capacity from '../../features/sandbox/capacity';

export default function App() {
  const { key } = useLocation();

  return (
    <>
      <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/events' component={MeetupDashboard} />
              <Route exact path='/sandbox' component={Capacity} />
              <Route path='/events/:id' component={MeetupDetailedPage} />
              <Route
                path={['/createEvent', '/manage/:id']}
                component={MeetupForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

//main is from ui.main.container
