import { TimelineEvent as TimelineEventType } from "../../../models/timeline_event";
import styles from "../../../styles/timeline_event_card.module.css";

interface Props {
    event: TimelineEventType;
    onClick?: () => void; // 👈 nuevo
}

export default function TimelineEventCard({ event, onClick }: Props) {
    return (
        <div className={styles["timeline-event"]} onClick={onClick}>
            <img src={event.image} alt={event.title} className={styles["timeline-image"]} />
            <h3>{event.year}</h3>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
        </div>
    );
}