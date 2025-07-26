import { useState } from "react";
import { timelineData } from "../../../data/timeline_data";
import TimelineEventCard from "./timeline_event_card";
import ExpandedEvent from "./expanded_event"; // 👈 Tu vista detallada
import styles from "../../../styles/panorama.module.css";
import { TimelineEvent } from "../../../models/timeline_event";

interface TimelineProps {
  data?: typeof timelineData;
  title?: string;
  selectedEvent: TimelineEvent | null;
  onSelectEvent: (event: TimelineEvent | null) => void;
}

export default function Timeline({ data = timelineData, title = "Línea del tiempo" }: TimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof timelineData)[number]>(null);

  return (
    <section className={styles["timeline-section"]}>
      <h2>{title}</h2>

      <div className={styles["timeline-scroll"]}>
        {data.map((event) => (
          <TimelineEventCard
            key={event.id}
            event={event}
            onClick={() => setSelectedEvent(event)} // 👈 Le pasas la función
          />
        ))}
      </div>

      {selectedEvent && (
        <ExpandedEvent
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)} // 👈 Cierra el detalle
        />
      )}
    </section>
  );
}