// src/data/timeline_data.ts
import { TimelineEvent } from "../models/timeline_event";

export const timelineData: TimelineEvent[] = [
    {
        id: "1",
        year: 1943,
        title: "ENIAC",
        description: "Primera computadora electrónica de propósito general.",
        image: "/images/eniac.jpg",
    },
    {
        id: "2",
        year: 1976,
        title: "Apple I",
        description: "Apple lanza su primera computadora personal.",
        image: "/images/apple1.jpg",
    },
    {
        id: "3",
        year: 2007,
        title: "iPhone",
        description: "Apple presenta el iPhone y redefine la computación móvil.",
        image: "/images/iphone.jpg",
    },
];