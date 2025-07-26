// src/models/timeline.ts
export interface TimelineEvent {
  id: string;
  year: number;
  titleKey: string;
  descriptionKey: string;
  image: string;
}