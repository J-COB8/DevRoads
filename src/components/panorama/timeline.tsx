import { timelineData } from "../../data/timeline_data";
import TimelineEventCard from "./timeline_event_card"; // ✅ ajusta el path según tu estructura
import "../../styles/panorama.css";

export default function Timeline() {
    return (
        <section className="timeline-section">
            <h2>Línea del tiempo</h2>
            <div className="timeline-scroll">
                {timelineData.map((event) => (
                    <TimelineEventCard key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
}