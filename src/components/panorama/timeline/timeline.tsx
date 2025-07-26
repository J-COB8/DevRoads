import { useState } from "react";
import { timelineData } from "../../../data/timeline_data";
import TimelineEventCard from "./timeline_event_card";
import ExpandedEvent from "./expanded_event";
import styles from "../../../styles/panorama.module.css";
import { TimelineEvent } from "../../../models/timeline_event";
import { useTranslation } from 'react-i18next';

interface TimelineProps {
  data?: typeof timelineData;
  title?: string; // Texto plano o clave de traducción
  selectedEvent: TimelineEvent | null;
  onSelectEvent: (event: TimelineEvent | null) => void;
}

export default function Timeline({ data = timelineData, title = "timelineTitle" }: TimelineProps) {
  const [selectedEvent, setSelectedEvent] = useState<null | (typeof timelineData)[number]>(null);
  const { t } = useTranslation('timeline_data');

  return (
    <section className={styles["timeline-section"]}>
      <h2>{t(title)}</h2>

      <div className={styles["timeline-scroll"]}>
        {data.map((event) => (
          <TimelineEventCard
            key={event.id}
            event={{
              ...event,
              title: t(event.titleKey),
              description: t(event.descriptionKey),
            }}
            onClick={() => setSelectedEvent(event)}
          />
        ))}
      </div>

      {selectedEvent && (
        <ExpandedEvent
          event={{
            ...selectedEvent,
            title: t(selectedEvent.titleKey),
            description: t(selectedEvent.descriptionKey),
          }}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  );
}