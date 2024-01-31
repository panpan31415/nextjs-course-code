import EventList from "../../components/events/EventList";
import { getAllEvents, getFilteredEvents } from "../../dummy-data";
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";
export default function EventPage() {
  const router = useRouter();
  const events = getAllEvents();

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
      <EventSearch onSearch={onSearch} />
      <EventList items={events} />
    </Fragment>
  );
}
