import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
function AllEventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findsEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={findsEventsHandler} />
      <EventList items={allEvents}></EventList>
    </Fragment>
  );
}

export default AllEventsPage;
