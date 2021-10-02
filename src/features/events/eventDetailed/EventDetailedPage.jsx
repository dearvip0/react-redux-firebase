import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfor from './EventDetailedInfor';
import EventDetailedSidebar from './EventDetailedSidebar';

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column width="10">
        <EventDetailedHeader />
        <EventDetailedInfor />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width="6">
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
};

export default EventDetailedPage;
