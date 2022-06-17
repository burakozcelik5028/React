import { useRouter } from "next/router";
import { Fragment } from "react";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import EventLogistic from "../../components/event-detail/event-logistics";

function EventDetailPage() {
  const router = useRouter();
  const eventID = router.query.eventId;
  const event = getEventById(eventID);
  if (!event) {
    return (
      <div>
        <h1>No Event Found!</h1>
      </div>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistic
        date={event.date}
        address={event.location}
        image={event.image}
      ></EventLogistic>
      <EventContent>
        <p>{event.descriptions}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
