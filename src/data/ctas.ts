import { ebayUrl } from '../lib/ebay';
import { site } from './site';

export type CtaType = 'hire' | 'used-boxes' | 'roof-bars' | 'bike-carriers' | 'repairs' | 'fit-my-car' | 'keys';

export const ctas: Record<CtaType, { icon: string; title: string; text: string; primary: { label: string; href: string; external?: boolean }; secondary: { label: string; href: string; external?: boolean } }> = {
  hire: {
    icon: 'CalendarCheck',
    title: 'Hiring a roof box for your trip?',
    text: 'Genuine Thule roof boxes and bars from our Tuddenham workshop, fitted to your car with a quick demo before you go.',
    primary: { label: 'See hire options & book', href: '/roof-box-hire/#book' },
    secondary: { label: `Call ${site.phone}`, href: site.phoneHref },
  },
  'used-boxes': {
    icon: 'Tag',
    title: 'Save on a used Thule roof box',
    text: 'Browse our used and ex-display Thule roof boxes on eBay. Collect from Tuddenham and we’ll fit it free.',
    primary: { label: 'Shop used roof boxes', href: ebayUrl('roof box', 'used'), external: true },
    secondary: { label: 'How buying used works', href: '/used-thule/' },
  },
  'roof-bars': {
    icon: 'Ruler',
    title: 'Get the right Thule roof bars first time',
    text: 'Tell us your make, model and year and we’ll match the bars, foot pack and fitting kit, new or used.',
    primary: { label: 'Check what fits my car', href: '/which-roof-bars-fit-my-car/' },
    secondary: { label: 'Browse Thule roof bars', href: '/thule-roof-bars/' },
  },
  'bike-carriers': {
    icon: 'Bike',
    title: 'Looking for a Thule bike carrier?',
    text: 'Towbar, roof and boot-mounted Thule carriers, new and used, with free fitting and a proper demo at our workshop.',
    primary: { label: 'Shop bike carriers', href: '/thule-bike-carriers/' },
    secondary: { label: 'Ask which one suits you', href: '/contact/' },
  },
  repairs: {
    icon: 'Wrench',
    title: 'Broken Thule kit? Send it to the specialists',
    text: `${site.thule.claim}. Bike carriers, roof boxes, locks and keys, repaired in our workshop or by post.`,
    primary: { label: 'Book a repair', href: '/thule-repairs/#repair-form' },
    secondary: { label: `Call ${site.phone}`, href: site.phoneHref },
  },
  'fit-my-car': {
    icon: 'CarFront',
    title: 'Not sure what fits your car?',
    text: 'Send us your make, model, year and roof type. We’ll reply with the exact Thule set-up you need.',
    primary: { label: 'Tell us your car', href: '/which-roof-bars-fit-my-car/' },
    secondary: { label: 'Free fitting with purchase', href: '/fitting/' },
  },
  keys: {
    icon: 'KeyRound',
    title: 'Need a replacement Thule key or lock?',
    text: 'We stock Thule keys and lock cylinders across the N001–N250 range, plus hard-to-find spare parts.',
    primary: { label: 'Keys & spare parts', href: '/thule-spare-parts/' },
    secondary: { label: 'Shop keys on eBay', href: ebayUrl('thule key'), external: true },
  },
};
