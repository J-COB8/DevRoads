import { timelineData } from "../../data/timeline_data";
import TimelineEventCard from "./timeline_event_card"; // ✅ ajusta el path según tu estructura
import "../../styles/panorama.css";

interface TimelineProps {
  data?: typeof timelineData;
  title?: string;
}

export default function Timeline({ data = timelineData, title = "Línea del tiempo" }: TimelineProps) {

  return (
    <section className="timeline-section">
      <h2>{title}</h2>

      <div className="timeline-scroll">
        {data.map((event) => (
          <TimelineEventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}