import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

export default function EventPage() {
  const featuredEvents = getAllEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
