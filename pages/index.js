import EventList from "../components/events/EventList";
import { getAllEvents } from "../dummy-data";
export default function HomePage() {
  const featuredEvents = getAllEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
