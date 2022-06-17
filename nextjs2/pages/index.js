import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/EventList";

export default function Home() {
  const featuredImages = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredImages}></EventList>
    </div>
  );
}
