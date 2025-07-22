import { figuresInfo } from "../../data/figures_data";
// import "../../styles/panorama.css";
import FiguresCard from "./figures_card";

interface TimelineProps {
    data?: typeof figuresInfo;
    title?: string;
}

export default function keyfigures({ data = figuresInfo, title = "Línea del tiempo" }: TimelineProps) {

    return (
        <section className="timeline-section">
            <h2>{title}</h2>

            <div className="timeline-scroll">
                {data.map((event) => (
                    <FiguresCard key={event.id} event={event} />
                ))}
            </div>
        </section>
    );
}