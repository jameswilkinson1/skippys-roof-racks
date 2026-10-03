export const categoryLabels = {
  'roof-boxes': 'Roof boxes',
  'roof-bars': 'Roof bars',
  'bike-carriers': 'Bike carriers',
  'repairs-parts': 'Repairs & parts',
} as const;

export type GuideCategory = keyof typeof categoryLabels;
