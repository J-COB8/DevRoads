import Timeline from "../components/panorama/timeline/timeline";
import { TimelineEvent } from "../models/timeline_event";
import styles from "../styles/timeline_full.module.css";
import { useNavigate } from "react-router-dom";

export default function TimelineFull() {
    const navigate = useNavigate();

    return (
        <div className={styles["timeline-full-container"]}>
            <button className={styles["back-button"]} onClick={() => navigate(-1)}>← Volver</button>
            <Timeline title="Explora la línea del tiempo completa" selectedEvent={null} onSelectEvent={function (event: TimelineEvent | null): void {
                throw new Error("Function not implemented.");
            }} />
        </div>
    );
}