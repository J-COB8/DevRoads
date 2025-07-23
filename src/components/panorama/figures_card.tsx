import { FiguresInfo as FiguresDatas } from "../../models/figures_info";
import styles from "../../styles/figures_card.module.css"

interface Props {
    event: FiguresDatas;
}

export default function FiguresCard({ event }: Props) {
    return (
        <div className={styles["timeline-event"]}>
            <img src={event.image} alt={event.name} className="timeline-image" />
            <h3>{event.born}</h3>
            <h4>{event.name}</h4>
            <p>{event.contributions}</p>
            <p>{event.influence}</p>
            <p>{event.Bio}</p>
        </div>
    );
}