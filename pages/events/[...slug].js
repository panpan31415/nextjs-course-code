import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/results-title/results-title";

export default function FilteredEventPage() {
  const router = useRouter();
  if (!router?.query?.slug) {
    return <p className="center">loading</p>;
  }
  const [year, month] = router.query.slug;
  const filteredEvents = getFilteredEvents({
    year: parseInt(year),
    month: parseInt(month),
  });
  if (filteredEvents && filteredEvents.length > 0) {
    return (
      <Fragment>
        <ResultsTitle />
        <EventList items={filteredEvents} />
      </Fragment>
    );
  }
  return <p className="center">no events found</p>;
}
