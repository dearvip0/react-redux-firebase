import EventListItem from './EventListItem';

const EventList = ({ events, selectEvent, deleteEvent }) => {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          key={event.id}
          deleteEvent={deleteEvent}
          event={event}
          selectEvent={selectEvent}
        />
      ))}
    </>
  );
};

export default EventList;
