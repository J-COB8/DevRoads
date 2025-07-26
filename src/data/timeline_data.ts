// src/data/timeline_data.ts
import { TimelineEvent } from "../models/timeline_event";

export const timelineData: TimelineEvent[] = [
    {
        id: "1",
        year: 1943,
        titleKey: "timeline.eniac.title",
        descriptionKey: "timeline.eniac.description",
        image: "/images/eniac.jpg",
    },
    {
        id: "2",
        year: 1976,
        titleKey: "timeline.apple1.title",
        descriptionKey: "timeline.apple1.description",
        image: "/images/apple1.jpg",
    },
    {
        id: "3",
        year: 2007,
        titleKey: "timeline.iphone.title",
        descriptionKey: "timeline.iphone.description",
        image: "/images/iphone.jpg",
    },
];