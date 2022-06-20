import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/UI/error-alert";
import { getFilteredEvents } from "../../dummy-data";
import { Fragment } from "react";
import Button from "../../components/UI/Button";

function FilterenEvents() {
  const router = useRouter();

  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">
            Invalid Filter. Please adjust your values again!!
          </p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className="center">No Events Found For The Choosen Filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents}></EventList>
    </Fragment>
  );
}

export default FilterenEvents;
