import { site } from '../data/site';

export type Condition = 'new' | 'used' | 'any';

/**
 * Build a link to Skippy's live eBay listings filtered by keyword and condition.
 * These are saved searches, so they always show current stock. Nothing to maintain.
 */
export function ebayUrl(query = '', condition: Condition = 'any'): string {
  const params = new URLSearchParams({ _ssn: site.ebay.seller });
  if (query) params.set('_nkw', query);
  if (condition === 'new') params.set('LH_ItemCondition', '1000');
  if (condition === 'used') params.set('LH_ItemCondition', '3000');
  return `https://www.ebay.co.uk/sch/i.html?${params.toString()}`;
}

/** Shared eBay category tiles used on the home, used and category pages. */
export const ebayCategories = {
  roofBoxes: { title: 'Roof boxes', query: 'roof box' },
  roofBars: { title: 'Roof bars', query: 'thule bar' },
  fittingKits: { title: 'Fitting kits & foot packs', query: 'thule fitting kit' },
  bikeCarriers: { title: 'Bike carriers', query: 'thule bike' },
  dogCrates: { title: 'Dog crates', query: 'thule allax' },
  child: { title: 'Child bike seats & strollers', query: 'thule yepp' },
  keys: { title: 'Keys & locks', query: 'thule key' },
  parts: { title: 'Spare parts', query: 'thule replacement' },
};
