import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/error-alert/error-alert";

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
        <ResultsTitle date={new Date(parseInt(year), parseInt(month) - 1)} />
        <EventList items={filteredEvents} />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <main className="center">
        <ErrorAlert>
          <p className="center">No Events Found</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </main>
    </Fragment>
  );
}
