import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          deleteEvent={deleteEvent}
          event={event}
          key={event.id}
          selectEvent={selectEvent}
        />
      ))}
    </>
  );
};

export default EventList;
