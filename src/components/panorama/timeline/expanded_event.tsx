import { TimelineEvent } from "../../../models/timeline_event";
import styles from "../../../styles/expanded_event.module.css";

interface Props {
    event: TimelineEvent;
    onClose: () => void;
}

export default function ExpandedEvent({ event, onClose }: Props) {
    return (
        <div className={styles["overlay"]} onClick={onClose}>
            <div className={styles["modal"]} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>✕</button>
                <img src={event.image} alt={event.title} style={{ width: "100%", borderRadius: "8px" }} />
                <h2>{event.title}</h2>
                <h3>{event.year}</h3>
                <p>{event.description}</p>
            </div>
        </div>
    );
}