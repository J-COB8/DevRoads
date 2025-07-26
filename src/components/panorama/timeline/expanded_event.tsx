import { TimelineEvent } from "../../../models/timeline_event";
import styles from "../../../styles/expanded_event.module.css";

interface Props {
    event: TimelineEvent & {
        title: string;
        description: string;
    };
    onClose: () => void;
}

export default function ExpandedEvent({ event, onClose }: Props) {
    return (
        <div className={styles["mioverlay"]} onClick={onClose}>
            <div className={styles["mimodal"]} onClick={(e) => e.stopPropagation()}>
                <button className={styles["miboton"]} onClick={onClose}>✕</button>
                <img src={event.image} alt={event.title} style={{ width: "100%", borderRadius: "8px" }} />
                <h2>{event.title}</h2>
                <h3>{event.year}</h3>
                <p>{event.description}</p>
            </div>
        </div>
    );
}